import { randomUUID } from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pet } from './pet.entity';

@Entity('user')
export class User {
  // @PrimaryColumn('char', { default: randomUUID, length: 32 })
  // id: string;
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 2000 })
  name: string;

  // @Column('text', { name: 'something' })
  // something: string;

  // @Column('boolean', { default: false })
  // is_published: boolean;

  // @Column('varchar', { length: 255 })
  // password: string;

  // // @Column('varchar', { length: 50 })
  // // first_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Pet, (pet) => pet.owner)
  pets: Pet[];

  //   @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  //   public updated_at: Date;
}

console.log('yes');
