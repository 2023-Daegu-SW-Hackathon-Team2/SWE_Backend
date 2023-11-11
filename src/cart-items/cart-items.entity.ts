import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cart_id: number;

    @Column()
    product_id: number;

    @Column()
    quantity: number;
}
