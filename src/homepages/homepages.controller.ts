import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseInterceptors,
    UploadedFiles,
    UploadedFile,
} from '@nestjs/common';
import { FilesInterceptor, FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreateHomepagesDto } from './dto/create-homepages.dto';
import { HomepagesService } from './homepages.service';
import { Homepages } from './homepages.entity';

@Controller('homepages')
export class HomepagesController {
    constructor(private readonly homepagesService: HomepagesService) {}

    @Post()
    create(@Body() createHomepagesDto: CreateHomepagesDto) {
        return this.homepagesService.create(createHomepagesDto);
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        return this.homepagesService.uploadImages(files);
    }

    @Post('logoupload')
    @UseInterceptors(FileInterceptor('files'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.homepagesService.uploadImage(file);
    }

    @Get('id/:id')
    findOne(@Param('id') id: number) {
        return this.homepagesService.findOne(id);
    }

    @Put('id/:id')
    @UseInterceptors(AnyFilesInterceptor())
    update(@Param('id') id: number, @UploadedFiles() files, @Body() body) {
        // 'body'는 FormData에서 'new_item'과 'best_item'을 포함합니다.
        const newItems = body.new_item;
        const bestItems = body.best_item;

        // 서비스 메소드 호출
        return this.homepagesService.update(id, newItems, bestItems);
    }
}
