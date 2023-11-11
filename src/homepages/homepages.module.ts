import { Module } from '@nestjs/common';
import { HomepagesService } from './homepages.service';
import { HomepagesController } from './homepages.controller';

@Module({
    providers: [HomepagesService],
    controllers: [HomepagesController],
})
export class HomepagesModule {}
