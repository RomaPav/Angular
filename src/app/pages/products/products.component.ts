import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ItemsModule } from '../../items/items.module';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ComponentsModule,
    ItemsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
