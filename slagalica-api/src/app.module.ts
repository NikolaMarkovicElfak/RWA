import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermsModule } from './terms/terms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Term } from './entities/term.entity';
import { ColumnsModule } from './columns/columns.module';
import { AsColumn } from './entities/column.entity';

@Module({
  imports: [TermsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass',
    entities: [Term, AsColumn],
    synchronize: true,
    database: 'slagalica'
}), ColumnsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
