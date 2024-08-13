import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  findAll(): Promise<Pet[]> {
    return Promise.resolve([]);
  }
}
