import { MigrationInterface, QueryRunner } from 'typeorm';

export class addcolumn1638626011417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('alter table user add password varchar(255) not null');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('alter table user drop column password');
  }
}
