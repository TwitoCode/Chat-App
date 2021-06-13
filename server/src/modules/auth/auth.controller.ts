import { AuthService } from "./auth.service";
import { Body, Controller, Post } from "@nestjs/common";
import { RegisterDTO } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post("/register")
  async register(@Body() body: RegisterDTO) {
    return;
  }
}
