import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDto, UsersService } from "src/users";
import { AccessTokenDto } from "../dtos";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDto | null> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      return { id: user.id, email: user.email };
    }
    return null;
  }

  async signIn(userDto: UserDto): Promise<AccessTokenDto> {
    const payload = { email: userDto.email, sub: userDto.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
