import { Column, Entity, OneToMany } from "typeorm";
import { Product } from "./Product";
import { StoreAccount } from "./StoreAccount";

@Entity("store", { schema: "challenge_store_db" })
export class Store {
  @Column("char", { primary: true, name: "id_store", length: 36 })
  idStore: string;

  @Column("text", { name: "photo_path", nullable: true })
  photoPath: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @OneToMany(() => Product, (product) => product.store)
  products: Product[];

  @OneToMany(() => StoreAccount, (storeAccount) => storeAccount.storeAccount)
  storeAccounts: StoreAccount[];
}
