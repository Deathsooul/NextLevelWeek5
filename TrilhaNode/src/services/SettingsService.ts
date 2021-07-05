// Imports

import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

//Inteface
interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    // verificando se ja existe este usuários
    const userAlredyExists = await settingsRepository.findOne({
      username,
    });

    if (userAlredyExists) {
      throw new Error("User already exists!");
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
