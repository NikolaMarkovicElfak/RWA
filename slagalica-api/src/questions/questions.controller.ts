import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Question } from 'src/entities/question.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor (private questionsService: QuestionsService) {}

    @Get()
    public getQuestions() {
        return this.questionsService.getAll();
    }

    @Get(':id')
    public getQuestion(@Param('id', ParseIntPipe) id: number) {
        return this.questionsService.getById(id);
    }
    
    @Post()
    public addQuestion(@Body() question: Question){
        return this.questionsService.create(question);
    }
}
