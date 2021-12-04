import { randomUUID } from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  //   @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  //   public updated_at: Date;
}

console.log('yes');
