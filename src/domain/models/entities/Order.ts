import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Customer } from "./Customer";
import { OrderHasProduct } from "./OrderHasProduct";

@Entity("order", { schema: "challenge_store_db" })
export class Order {
  @Column("char", { primary: true, name: "id_order", length: 36 })
  idOrder: string;

  @Column("varchar", { name: "order_num", nullable: true, length: 20 })
  orderNum: string | null;

  @ManyToMany(() => Customer, (customer) => customer.orders)
  customers: Customer[];

  @OneToMany(() => OrderHasProduct, (orderHasProduct) => orderHasProduct.order)
  orderHasProducts: OrderHasProduct[];
}
