/**
 * 用户实体
 */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')

export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @PrimaryColumn({ name: 'job_no'})
    jobNo!: string;

    @Column()
    name!: string;

    @Column()
    sex!: string;

    @Column()
    tel!: string;

    @Column()
    email!: string;

    @Column()
    address!: string;

    @Column({name: 'create_by'})
    createBy!: string;

    @Column({name: 'created_at', type: 'datetime'})
    createdAt!: string;

    @Column({name: 'update_by'})
    updateBy!: string;

    @Column({name: 'updated_at', type: 'datetime'})
    updatedAt!: string;
}