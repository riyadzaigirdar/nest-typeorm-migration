import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1638624752266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table user rename column somethings to something',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table user rename column somethings to something',
    );
  }
}
