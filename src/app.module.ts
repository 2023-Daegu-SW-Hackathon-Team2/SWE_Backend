import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HomepagesModule } from './homepages/homepages.module';
import { CreatedUsersModule } from './createdUsers/createdUsers.module';
import { BannersModule } from './banners/banners.module';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  imports: [UsersModule, ProductsModule, HomepagesModule, CreatedUsersModule, BannersModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
