import { Injectable } from '@nestjs/common';
import { Categories } from './categories.entity';
import supabase from 'src/supabase-config';
@Injectable()
export class CategoriesService {
    async findAll(): Promise<Categories[] | null> {
        const { data, error } = await supabase.from('Categories').select('*');
        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }
        return data;
    }

    async findOne(id: number): Promise<Categories | null> {
        const { data, error } = await supabase
            .from('Categories')
            .select('*')
            .eq('id', id);
        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }
        return data ? (data[0] as Categories) : null;
    }

    async findCategories(id: number): Promise<Categories[] | null> {
        const { data, error } = await supabase
            .from('Categories')
            .select('*')
            .eq('homepage_id', id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Categories[];
    }

    async create(category: Categories): Promise<Categories> {
        const { data, error } = await supabase
            .from('Categories')
            .insert([category])
            .select();
        if (error) {
            console.error('Error creating category:', error);
            return null;
        }
        return data ? (data[0] as Categories) : null;
    }

    async update(id: number, category: Categories): Promise<Categories> {
        const { data, error } = await supabase
            .from('Categories')
            .update(category)
            .eq('id', id)
            .select();
        if (error) {
            console.error('Error updating category:', error);
            return null;
        }
        return data ? (data[0] as Categories) : null;
    }

    async delete(id: number): Promise<Categories> {
        const { data, error } = await supabase
            .from('Categories')
            .delete()
            .eq('id', id)
            .select();
        if (error) {
            console.error('Error deleting category:', error);
            return null;
        }
        return data ? (data[0] as Categories) : null;
    }
}
