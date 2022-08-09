import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarComponent } from './producto/registrar/registrar.component';

const routes: Routes = [
  {
    path:'productos',
    component: ProductoComponent
  },

  {
    path:'productos/registrar',
    component: RegistrarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
