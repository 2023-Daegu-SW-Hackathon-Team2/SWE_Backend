import { Module } from '@nestjs/common';
import { CreatedUsersService } from './createdUsers.service';
import { CreatedUsersController } from './createdUsers.controller';

@Module({
    providers: [CreatedUsersService],
    controllers: [CreatedUsersController],
})
export class CreatedUsersModule {}
