import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  hab: Habilidad[] = [];
  editHab: Habilidad;
  editHab1: Habilidad;
  

  constructor(private sHabilidad: HabilidadService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }

  isLogged = false;
  roles: string[];
  isAdmin = false;
  nombre: String;
  porcentaje: number;
  imagen: String;
  editNombre: String;
  editPorcentaje: number;
  editImagen: String;
  idEditHab: number = null;

  ngOnInit(): void {
    this.cargarHabilidades();
   
  }

  cargarHabilidades(): void {
    this.sHabilidad.lista().subscribe(data => { this.hab = data; });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.nombre = "";
    this.porcentaje = 0;
    this.imagen = "";
  }

  crearHab(): void {
    const hab = new Habilidad(this.nombre, this.porcentaje, this.imagen);
    this.sHabilidad.save(hab).subscribe({
      next:
        data => {
          alert("Habilidad añadida");
          this.router.navigate([''])
          this.cargarHabilidades();


        }, error: () => {
          console.log("Error al cargar");
          this.cargarHabilidades();
        }
    })
  }

  tomarId(id: number): void{
    this.idEditHab = id;
    this.sHabilidad.detail(this.idEditHab).subscribe({next:
    data =>{
      this.editHab = data;
      this.editNombre = this.editHab.nombre
      this.editPorcentaje = this.editHab.porcentaje
      this.editImagen = this.editHab.imagen
      console.dir(this.editHab);
      
    }, error: () => {console.log("Error al leer id")}
  })
  }

  editarHab(): void {

    const editHab1 = new Habilidad(this.editNombre, this.editPorcentaje, this.editImagen);
    this.sHabilidad.update(this.idEditHab, editHab1).subscribe({
      next:
        data => {
          this.cargarHabilidades();

        }, error: () => {
          console.log("Error al editar " + this.idEditHab);
          console.log(editHab1);
          this.cargarHabilidades();
        }
    })
  }

  eliminarHab(id?: number) {
    this.sHabilidad.delete(id).subscribe(
      {
        next: () => {
          this.cargarHabilidades();
        }, error: () => {
          console.log("Error al eliminar");
          this.cargarHabilidades();
        }
      })
  }

}


