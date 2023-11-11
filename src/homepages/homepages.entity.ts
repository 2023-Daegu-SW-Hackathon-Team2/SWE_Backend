import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * Represents a user in the system.
 */
export class Homepages {
    /**
     * The unique identifier for the user.
     *
     * @remarks
     * This property is automatically generated by the database.
     */
    @Column()
    id: number;

    @Column()
    user_id: string;

    @Column()
    title: string;

    @Column()
    logo: string;
}
