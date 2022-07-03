import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { EditProfileDto } from './dto/EditProfile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    if (await this.isUserExist(createUserDto.username, createUserDto.email)) {
      return null;
    }
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

  findUserById(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username: username } });
  }

  editProfile(editProfileDto: EditProfileDto) {
    return this.userRepository.update(
      { id: editProfileDto.id },
      editProfileDto,
    );
  }

  private async isUserExist(username: string, email: string) {
    return await this.userRepository.count({
      where: [{ username: username }, { email: email }],
    });
  }

  async findUserId(username: string) {
    return (
      await this.userRepository.findOne({ where: { username: username } })
    ).id;
  }
}
