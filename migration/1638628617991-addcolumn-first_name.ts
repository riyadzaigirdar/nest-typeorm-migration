import { MigrationInterface, QueryRunner } from 'typeorm';

export class addcolumnFirstName1638628617991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('alter table user add first_name varchar(50) not null');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('alter table user drop column first_name');
  }
}
