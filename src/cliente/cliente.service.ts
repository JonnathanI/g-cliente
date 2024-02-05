/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor (private prisma: PrismaService){}
  createCliente(createClienteDto:CreateClienteDto) {
    return 'This action adds a new blog';
  }

  findAll() {
    return this.prisma.gestionC.findMany();
  }

  findOne(id: number) {
    return this.prisma.gestionC.findUnique({where:{id}});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.gestionC.update({
      where: {id},
      data: updateClienteDto,
    });
  }

  remove(id: number) {
    return this.prisma.gestionC.delete({where: {id}});
  }
}
