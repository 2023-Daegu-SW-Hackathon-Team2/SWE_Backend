import { Injectable } from '@nestjs/common';
import { Banner } from './banners.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class BannersService {
    async create(banner: Banner): Promise<Banner> {
        const { data, error } = await supabase
            .from('Banners')
            .insert([banner])
            .select();

        if (error) {
            console.error('Error creating banner:', error);
            return null;
        }

        return data ? (data[0] as Banner) : null;
    }

    async findOne(homepage_id: number): Promise<Banner[] | null> {
        const { data, error } = await supabase
            .from('Banners')
            .select('*')
            .eq('homepage_id', homepage_id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Banner[];
    }
}
