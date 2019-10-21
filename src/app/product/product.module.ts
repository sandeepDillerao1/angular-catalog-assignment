import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { ProductRoutes } from "./product.routing";
import { HeaderComponent } from "../layout/components/header/header.component";
import { CartService } from "./cart.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, ProductRoutes, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, HeaderComponent],
  providers: [CartService]
})
export class ProductModule {}
