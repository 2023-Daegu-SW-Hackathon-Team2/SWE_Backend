import { Injectable } from '@nestjs/common';
import { CreatedUsers } from './createdUsers.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class CreatedUsersService {
    private readonly users: CreatedUsers[] = [];

    // async findAll(): Promise<CreatedUsers[] | null> {
    //     const { data, error } = await supabase.from('Users').select('*');

    //     if (error) {
    //         console.error('Error fetching data:', error);
    //         return null;
    //     }

    //     return data as CreatedUsers[];
    // }

    async create(createdUser: CreatedUsers): Promise<CreatedUsers | null> {
        const { data, error } = await supabase
            .from('CreatedUsers')
            .insert([createdUser])
            .select();
        if (error) {
            console.error('Error creating user:', error);
            return null;
        }
        console.log(data);
        return data ? (data[0] as CreatedUsers) : null;
    }

    // async findOne(id: string): Promise<User[] | null> {
    //     const { data, error } = await supabase
    //         .from('Users')
    //         .select('*')
    //         .eq('id', id);

    //     if (error) {
    //         console.error('Error fetching data:', error);
    //         return null;
    //     }

    //     return data as User[];
    // }
}
