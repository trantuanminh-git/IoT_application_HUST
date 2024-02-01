import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async signinLocal(dto: AuthDto) {
    const { email, password } = dto;
    const token = await this.jwtService.signAsync(
      { email },
      { secret: 'at-secret' },
    );
    return { token };
  }
}
