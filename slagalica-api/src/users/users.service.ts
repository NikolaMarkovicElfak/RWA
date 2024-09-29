import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) {}

    public getAll() {
        return this.usersRepository.find();
    }

    public getById(id: number){
        return this.usersRepository.findOne({where: {id}});
    }

    public findOnebyEmail (email : string) {
        return this.usersRepository.findOne({where: {email}})
    }

    public create(user: User){
        this.usersRepository.save(user);
    }

}
