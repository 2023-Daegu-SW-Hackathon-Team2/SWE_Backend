import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homepage_id: number;

    @Column()
    category_name: string;
}
