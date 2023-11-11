import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HomepagesModule } from './homepages/homepages.module';
import { CreatedUsersModule } from './createdUsers/createdUsers.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [UsersModule, ProductsModule, HomepagesModule, CreatedUsersModule, CartItemsModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
