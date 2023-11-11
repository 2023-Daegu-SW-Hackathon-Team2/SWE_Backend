import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_user_id: string;

    @Column()
    product_id: number;

    @Column()
    quantity: number;
}
