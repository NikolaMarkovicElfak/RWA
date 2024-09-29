import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOnebyEmail(email);
    if (user && user.password === pass) { // U produkciji uvek koristite hashed passworde
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string): Promise<any> {
    return this.validateUser(email, password); // Vraća validiranog korisnika
  }
}
