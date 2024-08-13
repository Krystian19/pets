import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { Query } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
