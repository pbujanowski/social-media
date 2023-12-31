import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ContextIdFactory, ModuleRef } from "@nestjs/core";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserDto } from "src/users";
import { AuthService } from "../services";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
      usernameField: "email",
      passwordField: "password",
    });
  }

  async validate(
    request: Request,
    username: string,
    password: string,
  ): Promise<UserDto> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    const user = await authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
