import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermsModule } from './terms/terms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Term } from './entities/term.entity';
import { ColumnsModule } from './columns/columns.module';
import { AsColumn } from './entities/column.entity';
import { AssociationsModule } from './associations/associations.module';
import { Association } from './entities/association.entity';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './entities/answer.entity';
import { QuestionsModule } from './questions/questions.module';
import { Question } from './entities/question.entity';
import { UsersModule } from './users/users.module';
import { User } from './entities/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TermsModule, ColumnsModule, AssociationsModule,
    AnswersModule,  QuestionsModule, UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass',
    entities: [Term, AsColumn, Association, Answer, Question, User],
    synchronize: true,
    database: 'slagalica'
}),
],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
