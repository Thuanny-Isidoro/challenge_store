import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Order } from "./Order";

@Entity("customer", { schema: "challenge_store_db" })
export class Customer {
  @Column("char", { primary: true, name: "id_customer", length: 36 })
  idCustomer: string;

  @Column("text", { name: "photo_path", nullable: true })
  photoPath: string | null;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("varchar", { name: "id_reg_num", length: 45 })
  idRegNum: string;

  @Column("varchar", { name: "e-mail", length: 45 })
  eMail: string;

  @ManyToMany(() => Order, (order) => order.customers)
  @JoinTable({
    name: "customer_has_order",
    joinColumns: [
      { name: "customer_id_customer", referencedColumnName: "idCustomer" },
    ],
    inverseJoinColumns: [
      { name: "order_id_order", referencedColumnName: "idOrder" },
    ],
    schema: "challenge_store_db",
  })
  orders: Order[];
}
