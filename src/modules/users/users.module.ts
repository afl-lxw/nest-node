import { Module, CacheModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGurad } from '@/entities/index'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserGurad])
    // CacheModule.registerAsync({
      
    // }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}