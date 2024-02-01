import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('local/signup')
  // signupLocal(@Body() dto: CreateUserDto): Promise<Tokens> {
  //   return this.authService.signupLocal(dto);
  // }

  @Post('local/signin')
  signInLocal(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }

  // @UseGuards(AtGuard)
  // @Post('logout')
  // logout(@GetCurrentUserId() userId: number) {
  //   console.log(userId);
  //   return this.authService.logout(userId);
  // }
}
