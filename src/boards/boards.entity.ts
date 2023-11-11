import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Boards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homepage_id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    created_time: Date;

    @Column()
    created_user_id: string;
}
