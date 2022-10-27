import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  pro: Proyecto[] = [];
  editPro: Proyecto;
  editPro1: Proyecto;

  constructor(private sProyecto: ProyectoService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }

  isLogged = false;
  roles: string[];
  isAdmin = false;
  nombre: String;
  descripcion: String;
  imagen: String ;
  url: String;
  editNombre: String;
  editDescripcion: String;
  editImagen: String ;
  editUrl: String;
  idEditPro: number = null;

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.pro = data; });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.nombre = "";
    this.descripcion = "";
    this.imagen = "";
    this.url = "";
  }

  crearPro(): void {
    const pro = new Proyecto(this.nombre, this.descripcion, this.imagen, this.url);
    this.sProyecto.save(pro).subscribe({
      next:
        data => {
          alert("Proyecto añadido");
          this.router.navigate([''])
          this.cargarProyecto();


        }, error: () => {
          console.log("Error al cargar");
          this.cargarProyecto();
        }
    })
  }

  tomarId(id: number): void {
    this.idEditPro = id;
    this.sProyecto.detail(this.idEditPro).subscribe({
      next:
        data => {
          this.editPro = data;
          this.editNombre = this.editPro.nombre
          this.editDescripcion = this.editPro.descripcion
          this.editImagen = this.editPro.imagen
          this.editUrl = this.editPro.url
          console.dir(this.editPro);

        }, error: () => { console.log("Error al leer id") }
    })
  }

  editarPro(): void {

    const editPro1 = new Proyecto(this.editNombre, this.editDescripcion, this.editImagen, this.editUrl);
    this.sProyecto.update(this.idEditPro, editPro1).subscribe({
      next:
        data => {
          this.cargarProyecto();

        }, error: () => {
          console.log("Error al editar " + this.idEditPro);
          console.log(editPro1);
          this.cargarProyecto();
        }
    })
  }

  eliminarPro(id?: number) {
    this.sProyecto.delete(id).subscribe(
      {
        next: () => {
          this.cargarProyecto();
        }, error: () => {
          console.log("Error al eliminar");
          this.cargarProyecto();
        }
      })
  }

}
