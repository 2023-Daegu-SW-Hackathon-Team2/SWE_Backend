import { Injectable } from '@nestjs/common';
import { CartItems } from './cart-items.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class CartItemsService {
    async findOne(cart_id: number): Promise<CartItems[] | null> {
        const { data, error } = await supabase
            .from('CartItems')
            .select('*')
            .eq('id', cart_id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as CartItems[];
    }

    async create(cartItem: CartItems): Promise<CartItems> {
        const { data, error } = await supabase
            .from('CartItems')
            .insert([cartItem])
            .select();

        if (error) {
            console.error('Error creating cart item:', error);
            return null;
        }

        return data ? (data[0] as CartItems) : null;
    }

    async update(id: number, cartItem: CartItems): Promise<CartItems> {
        const { data, error } = await supabase
            .from('CartItems')
            .update(cartItem)
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error updating cart item:', error);
            return null;
        }

        return data ? (data[0] as CartItems) : null;
    }

    async delete(id: number): Promise<CartItems> {
        const { data, error } = await supabase
            .from('CartItems')
            .delete()
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error deleting cart item:', error);
            return null;
        }

        return data ? (data[0] as CartItems) : null;
    }
}
