import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Identidad } from 'src/app/model/identidad';
import { IdentidadService } from 'src/app/service/identidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  iden: Identidad;
  roles: string[];
  isAdmin = false;
  nombre: string;
  apellido: string;
  imgPerfil: string;
  imgPortada: string;
  acercaDe: string;
  profesion: string;
  mail: string;
  telefono: string;
  

  constructor(public identidadService: IdentidadService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarIdentidad();
  }
    
  cargarIdentidad(): void {  
    this.identidadService.detail(1).subscribe(data => //suscribe: conecta el observable con algunos eventos. Metodo q escucha siempre q el observable cambia, cuando cambia realiza algo
      { this.iden = data 
        this.nombre = this.iden.nombre
        this.apellido = this.iden.apellido;
        this.acercaDe = this.iden.acercaDe;
        this.profesion = this.iden.profesion;
        this.imgPerfil = this.iden.imgPerfil;
        this.imgPortada = this.iden.imgPortada;
        this.mail = this.iden.mail;
        this.telefono = this.iden.telefono;
      }) 
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  
  editIdentidad(): void {
    const ide = new Identidad(this.nombre, this.apellido, this.acercaDe, this.profesion, this.imgPerfil, this.imgPortada, this.mail, this.telefono );
    this.identidadService.update(1, ide).subscribe({next: data => {
      console.dir(data); 
      this.identidadService.detail(1);
      this.cargarIdentidad();
    }, error: () => {
      alert("No Actualizó");
      console.log( ide);
    }
  })
  }

}
