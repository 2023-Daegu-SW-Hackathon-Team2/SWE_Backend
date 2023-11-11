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
}
