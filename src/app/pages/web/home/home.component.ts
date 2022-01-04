import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  itemsWeb!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.itemsWeb = [
      {
          label: 'Inicio',
          routerLink: '/'
      },
      {
          label: 'Valores',
      },
      {
        label: 'Horarios',
      },
      {
        label:'Contacto'
      }
  ];
  }
  

}
