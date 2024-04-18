import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ItemsModule } from '../../items/items.module';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ComponentsModule,
    ItemsModule
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

}
