import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * Represents a banner in the system.
 */
export class Banner {
    /**
     * The unique identifier for the banner.
     *
     * @remarks
     * This property is automatically generated by the database.
     */
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homepage_id: number;

    @Column('simple-array')
    banner_data: string[];
}
