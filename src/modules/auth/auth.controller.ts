import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Sanitize } from 'src/common';
import { AuthService } from './auth.service';
import { fileSchema } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    findAll() {
        return this.authService.signIn();
    }

    @Post()
    @Sanitize(fileSchema)
    findOne() {
        return this.authService.signIn();
    }

    @Get('check-login')
    @UseGuards(JwtAuthGuard)
    checkLogin() {
        return this.authService.findOne();
    }
}
