import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaProductos: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this.productoService.listarProductos().subscribe((res:any) => {
      this.listaProductos = res.data;
    }
    )
  }

}
