import { Injectable } from '@nestjs/common';
import { Products } from './products.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class ProductsService {
    private readonly users: Products[] = [];

    async create(products: Products): Promise<Products | null> {
        const { data, error } = await supabase
            .from('Products')
            .insert([products])
            .select();
        if (error) {
            console.error('Error creating user:', error);
            return null;
        }
        console.log(data);
        return data ? (data[0] as Products) : null;
    }

    async findOne(id: number): Promise<Products[] | null> {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .eq('id', id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Products[];
    }

    async findCategory(category: number): Promise<Products[] | null> {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .eq('category', category);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Products[];
    }

    async update(id: number, products: Products): Promise<Products[] | null> {
        const { data, error } = await supabase
            .from('Products')
            .update(products)
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Products[];
    }

    async delete(id: number): Promise<Products[] | null> {
        const { data, error } = await supabase
            .from('Products')
            .delete()
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    async uploadImages(files: Express.Multer.File[]): Promise<string[]> {
        const uploadPromises = files.map((file) => {
            const filePath = `products/${Date.now()}-${file.originalname}`;
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
                    return filePath;
                });
        });

        return Promise.all(uploadPromises);
    }
}
