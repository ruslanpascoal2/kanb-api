import { Injectable } from '@nestjs/common';
import { CreateKanbanDto } from './dto/create-kanban.dto';
import { UpdateKanbanDto } from './dto/update-kanban.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class KanbansService {
  private prisma = new PrismaClient();

  async create({
    name,
    userId
  }: CreateKanbanDto) {
    await this.prisma.kanban.create(
      {
        data: {
          name, userId
        }
      }
    )
  }

  async findOne(id: string) {
    const kanban = await this.prisma.kanban.findUnique({
      where: {
        id,
      },
    });
    return kanban;
  }

  async update(id: string, {
    name,
  }: UpdateKanbanDto) {
    try {
      await this.prisma.kanban.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.kanban.delete({
        where: {
          id
        }
      })
    } catch (e) {
      throw e;
    }
  }
}
