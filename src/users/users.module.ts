import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { KanbansService } from 'src/kanbans/kanbans.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, KanbansService]
})
export class UsersModule {}
