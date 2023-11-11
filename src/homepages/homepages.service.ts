import { Injectable } from '@nestjs/common';
import { Homepages } from './homepages.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class HomepagesService {
    private readonly users: Homepages[] = [];

    async create(homepages: Homepages): Promise<Homepages | null> {
        const { data, error } = await supabase
            .from('Homepages')
            .insert([homepages])
            .select();
        if (error) {
            console.error('Error creating user:', error);
            return null;
        }
        console.log(data);
        return data ? (data[0] as Homepages) : null;
    }

    async findOne(id: number): Promise<Homepages[] | null> {
        const { data, error } = await supabase
            .from('Homepages')
            .select('*')
            .eq('id', id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Homepages[];
    }

    async update(
        id: number,
        homepages: Homepages,
    ): Promise<Homepages[] | null> {
        const { data, error } = await supabase
            .from('Homepages')
            .update(homepages)
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Homepages[];
    }

    // async update(
    //     id: number,
    //     newItems: string[],
    //     bestItems: string[]
    // ): Promise<Homepages[] | null> {
    //     const { data, error } = await supabase
    //         .from('Homepages')
    //         .update({ 
    //             new_item: newItems,
    //             best_item: bestItems
    //         })
    //         .eq('id', id)
    //         .select();
    
    //     if (error) {
    //         console.error('Error updating data:', error);
    //         return null;
    //     }
    
    //     return data as Homepages[];
    // }

    async uploadImage(file: Express.Multer.File): Promise<string> {
        const filePath = `logos/${Date.now()}-${file.originalname}`;
        await supabase.storage
            .from('storage')
            .upload(filePath, file.buffer, { contentType: file.mimetype });

        const { data, error } = await supabase.storage
            .from('storage')
            .createSignedUrl(filePath, 60000);

        await supabase
            .from('Homepages')
            .update({ logo: data['signedUrl'] })
            .eq('id', 6);

        return data['signedUrl'];
    }

    async uploadImages(files: Express.Multer.File[]): Promise<string[]> {
        const filepath: string[] = [];
        const uploadPromises = await files.map((file) => {
            const filePath = `banners/${Date.now()}-${file.originalname}`;
            return supabase.storage
                .from('storage')
                .upload(filePath, file.buffer, {
                    contentType: file.mimetype,
                })
                .then(({ data, error }) => {
                    if (error) {
                        throw new Error(
                            `Failed to upload image: ${file.originalname}`,
                        );
                    }
                    filepath.push(filePath);
                    return filepath;
                });
        });
        await Promise.all(uploadPromises);
        console.log('f', filepath);
        const { data, error } = await supabase.storage
            .from('storage')
            .createSignedUrls(filepath, 60000);

        // Supabase의 다른 테이블에 경로 저장
        const result = [];
        data.map((data) => {
            console.log(data['signedUrl']);
            result.push(data['signedUrl']);
        });

        await supabase
            .from('Homepages')
            .update({ banners: result })
            .eq('id', 6);
        return filepath;
    }
}
