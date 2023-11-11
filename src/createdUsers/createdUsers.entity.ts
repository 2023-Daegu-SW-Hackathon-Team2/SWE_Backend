import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * Represents a user in the system.
 */
export class CreatedUsers {
    /**
     * The unique identifier for the user.
     *
     * @remarks
     * This property is automatically generated by the database.
     */
    @Column()
    id: string;

    @Column()
    pw: string;

    @Column()
    user_id: string;
}