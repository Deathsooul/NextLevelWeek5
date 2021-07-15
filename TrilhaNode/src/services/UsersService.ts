import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    const userRepository = getCustomRepository(UsersRepository);
    // Verificar se o usuário existe

    const userExists = await userRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (userExists) {
      return userExists;
    }

    const user = userRepository.create({
      email,
    });

    await userRepository.save(user);

    // Se nao exister, salvar no DB

    return user;
  }
}

export { UsersService };
