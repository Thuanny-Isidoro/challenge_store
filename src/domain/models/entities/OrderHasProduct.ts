import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Index("fk_product_has_order_order1_idx", ["orderId"], {})
@Index("fk_product_has_order_product_idx", ["productId"], {})
@Entity("order_has_product", { schema: "challenge_store_db" })
export class OrderHasProduct {
  @Column("char", { primary: true, name: "order_has_product_id", length: 36 })
  orderHasProductId: string;

  @Column("char", { name: "order_id", length: 36 })
  orderId: string;

  @Column("char", { name: "product_id", length: 36 })
  productId: string;

  @ManyToOne(() => Order, (order) => order.orderHasProducts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "idOrder" }])
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderHasProducts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "idProduct" }])
  product: Product;
}
