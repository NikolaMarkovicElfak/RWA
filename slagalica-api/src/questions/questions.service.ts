import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question) private questionsRepository: Repository<Question>
    ) {}

    public getAll() {
        return this.questionsRepository.find({relations: ['answers']});
    }

    public getById(id: number){
        return this.questionsRepository.findOne({where: {id} ,relations: ['answers']});
    }

    public create(question: Question){
        this.questionsRepository.save(question);
    }
}
