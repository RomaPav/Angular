import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ItemsModule } from '../../items/items.module';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    ComponentsModule,
    ItemsModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

}
