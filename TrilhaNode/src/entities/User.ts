import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
// a versao 4 usa numeros aleatorios para gerar o uuid
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    // Se nao tiver preenchido, preenchemos com um uuid
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
