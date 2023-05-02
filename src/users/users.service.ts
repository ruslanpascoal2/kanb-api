import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create({ email, name }: CreateUserDto) {
    await this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: string, { name, email }: UpdateUserDto) {
    try {
      await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

}
