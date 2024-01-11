import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService) { }

    async signIn(username, pass, res: any) {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username, role: user.role.name };
        const jwtToken = await this.jwtService.signAsync(payload)
        res.cookie('jwt', jwtToken, { sameSite: 'none', secure: true });
        res.cookie('userId', user.id, { sameSite: 'none', secure: true });
        res.cookie('role', user.role.name, { sameSite: 'none', secure: true });
        return { userId: user.id, userName: user.username, token: jwtToken, role: user.role.name }
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
