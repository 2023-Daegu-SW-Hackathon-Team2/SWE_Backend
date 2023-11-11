import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BannersModule } from './banners/banners.module';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  imports: [UsersModule, BannersModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
