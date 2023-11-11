import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HomepagesModule } from './homepages/homepages.module';
import { CreatedUsersModule } from './createdUsers/createdUsers.module';

@Module({
  imports: [UsersModule, ProductsModule, HomepagesModule, CreatedUsersModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
