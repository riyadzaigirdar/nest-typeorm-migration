import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, DeleteResult, LessThan, MoreThan, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepositiry: Repository<User>,
  ) {}

  async findUser(name: string): Promise<User[]> {
    let found = await this.userRepositiry.find({
      // where: { name },
      // where: {
      //   createdAt: Between(
      //     '2021-12-04 22:36:07.404913',
      //     '2021-12-04 22:40:07.404913',
      //   ),
      // },
      where: {
        createdAt: LessThan('2021-12-04 22:36:07.404913'),
      },
      relations: ['pets'],
      // loadRelationIds: true,
      order: {
        createdAt: 'DESC',
      },
    });
    return found;
  }

  async create(name: string): Promise<User> {
    let newUser = await this.userRepositiry.create({ name });
    return this.userRepositiry.save(newUser);
  }

  async update(name: string, name2: string): Promise<User> {
    let found = await this.userRepositiry.findOne({ name });
    found.name = name2;
    return this.userRepositiry.save(found);
  }

  async delete(name: string): Promise<User> {
    let found = await this.userRepositiry.findOne({ name });
    console.log(found);
    return this.userRepositiry.remove(found);
  }
}
