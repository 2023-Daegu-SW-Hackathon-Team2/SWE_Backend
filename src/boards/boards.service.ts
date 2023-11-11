import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Boards } from './boards.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class BoardsService {
    async findAll(): Promise<Boards[]> {
        const { data, error } = await supabase.from('boards').select('*');

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data as Boards[];
    }

    async findOne(id: number): Promise<Boards> {
        const { data, error } = await supabase
            .from('Board')
            .select('*')
            .eq('id', id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data ? (data[0] as Boards) : null;
    }

    async create(board: Boards): Promise<Boards> {
        const { data, error } = await supabase
            .from('Board')
            .insert([board])
            .select();

        if (error) {
            console.error('Error creating user:', error);
            return null;
        }

        return data ? (data[0] as Boards) : null;
    }

    async update(id: number, board: Boards): Promise<Boards> {
        const { data, error } = await supabase
            .from('Board')
            .update(board)
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }

        return data ? (data[0] as Boards) : null;
    }

    async remove(id: number): Promise<void> {
        const { error } = await supabase.from('Board').delete().eq('id', id);

        if (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}
