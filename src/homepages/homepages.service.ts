import { Injectable } from '@nestjs/common';
import { Homepages } from './homepages.entity';
import supabase from 'src/supabase-config';

@Injectable()
export class HomepagesService {
    private readonly users: Homepages[] = [];

    // async findAll(): Promise<Homepages[] | null> {
    //     const { data, error } = await supabase.from('Users').select('*');

    //     if (error) {
    //         console.error('Error fetching data:', error);
    //         return null;
    //     }

    //     return data as User[];
    // }

    // async create(user: User): Promise<User | null> {
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
