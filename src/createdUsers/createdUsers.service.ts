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

    // async create(user: CreatedUsers): Promise<CreatedUsers | null> {
    //     const { data, error } = await supabase
    //         .from('Users')
    //         .insert([user])
    //         .select();
    //     if (error) {
    //         console.error('Error creating user:', error);
    //         return null;
    //     }
    //     console.log(data);
    //     return data ? (data[0] as User) : null;
    // }

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
