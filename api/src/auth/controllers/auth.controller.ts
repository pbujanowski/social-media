import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { UserDto } from "src/users";
import { Public } from "../decorators";
import { LocalAuthGuard } from "../guards";
import { AuthService } from "../services";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  signIn(@Body() userDto: UserDto) {
    return this.authService.signIn(userDto);
  }
}
