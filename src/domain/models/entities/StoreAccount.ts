import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Store } from "./Store";

@Index("fk_seller_store1_idx", ["storeAccountId"], {})
@Entity("store_account", { schema: "challenge_store_db" })
export class StoreAccount {
  @Column("char", { primary: true, name: "id_store_account", length: 36 })
  idStoreAccount: string;

  @Column("char", { name: "store_account_id", length: 36 })
  storeAccountId: string;

  @Column("varchar", { name: "email", nullable: true, length: 45 })
  email: string | null;

  @Column("varchar", { name: "login", nullable: true, length: 45 })
  login: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 45 })
  password: string | null;

  @ManyToOne(() => Store, (store) => store.storeAccounts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "store_account_id", referencedColumnName: "idStore" }])
  storeAccount: Store;
}
