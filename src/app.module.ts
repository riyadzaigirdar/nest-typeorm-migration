import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import dbConfig from './config/db.config';
import { User } from './user.entity';
import { getConnectionOptions } from 'typeorm';
import { Pet } from './pet.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      ...dbConfig,
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forFeature([User, Pet]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
