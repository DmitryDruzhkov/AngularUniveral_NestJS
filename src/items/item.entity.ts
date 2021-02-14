import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;
}
