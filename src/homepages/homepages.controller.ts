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
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
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
    update(@Param('id') id: number, @Body() homepages: Homepages) {
        return this.homepagesService.update(id, homepages);
    }
}
