import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OrderHasProduct } from "./OrderHasProduct";
import { Store } from "./Store";
import { ProductPhoto } from "./ProductPhoto";

@Index("fk_product_store1_idx", ["storeId"], {})
@Entity("product", { schema: "challenge_store_db" })
export class Product {
  @Column("char", { primary: true, name: "id_product", length: 36 })
  idProduct: string;

  @Column("char", { name: "store_id", length: 36 })
  storeId: string;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @OneToMany(
    () => OrderHasProduct,
    (orderHasProduct) => orderHasProduct.product
  )
  orderHasProducts: OrderHasProduct[];

  @ManyToOne(() => Store, (store) => store.products, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "store_id", referencedColumnName: "idStore" }])
  store: Store;

  @OneToMany(() => ProductPhoto, (productPhoto) => productPhoto.product)
  productPhotos: ProductPhoto[];
}
