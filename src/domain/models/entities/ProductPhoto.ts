import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Index("fk_product_photo_product1_idx", ["productId"], {})
@Entity("product_photo", { schema: "challenge_store_db" })
export class ProductPhoto {
  @Column("char", { primary: true, name: "id_product_photo", length: 36 })
  idProductPhoto: string;

  @Column("text", { name: "path" })
  path: string;

  @Column("char", { name: "product_id", length: 36 })
  productId: string;

  @ManyToOne(() => Product, (product) => product.productPhotos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "idProduct" }])
  product: Product;
}
