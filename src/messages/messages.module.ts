import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import {MessagesRepository } from './message.repository'
import {MessagesService} from './message.service';

@Module({
  controllers: [MessagesController],
  providers :[MessagesService,MessagesRepository]
})
export class MessagesModule {}
