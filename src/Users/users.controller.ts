import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { EditProfileDto } from './dto/EditProfile.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.createUser(createUserDto);

    if (!result) {
      throw new HttpException('Info Duplicate', HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('edit')
  @UsePipes(ValidationPipe)
  editProfile(@Body() editProfileDto: EditProfileDto) {
    return this.userService.editProfile(editProfileDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post('login')
  // async login(@Body() req) {
  //   return this.authService.login(req.user);
  // }
}
