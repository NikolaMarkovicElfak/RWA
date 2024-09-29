import { Module } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from 'src/entities/association.entity';
import { AssociationsController } from './associations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Association])],
  controllers: [AssociationsController],
  providers: [AssociationsService],
})
export class AssociationsModule {
}
