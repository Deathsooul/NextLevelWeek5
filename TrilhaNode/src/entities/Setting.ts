import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

// a versao 4 usa numeros aleatorios para gerar o uuid
import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    // Se nao tiver preenchido, preenchemos com um uuid
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting };
