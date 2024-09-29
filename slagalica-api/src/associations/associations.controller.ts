import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { Association } from 'src/entities/association.entity';

@Controller('associations')
export class AssociationsController {
    constructor (private associationsService: AssociationsService) {}

    @Get()
    public getAssociations() {
        return this.associationsService.getAll();
    }

    @Get(':id')
    public getAssociation(@Param('id', ParseIntPipe) id: number) {
        return this.associationsService.getById(id);
    }
    
    @Post()
    public addAssociation(@Body() association: Association){
        return this.associationsService.create(association);
    }
}
