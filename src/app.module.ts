import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { KanbansModule } from './kanbans/kanbans.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [AuthModule, KanbansModule, UsersModule, TasksModule, ColumnsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
