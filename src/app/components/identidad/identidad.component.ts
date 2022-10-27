import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identidad',
  templateUrl: './identidad.component.html',
  styleUrls: ['./identidad.component.css']
})
export class IdentidadComponent implements OnInit {

  isLogged = false;
  roles: string[];
  isAdmin = false;

  constructor() { }

  ngOnInit(): void {
  }

}
