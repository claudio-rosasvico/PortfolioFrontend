import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  exp: Experiencia[] = [];
  editExp: Experiencia;
  editExp1: Experiencia;

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }

  isLogged = false;
  roles: string[];
  isAdmin = false;
  cargo: String;
  institucionLaboral: String;
  descripcion: String;
  fechaInicio: Date;
  fechaFinal: Date ;
  imagen: String ;
  editCargo: String;
  editInstitucionLaboral: String;
  editDescripcion: String;
  editFechaInicio: Date;
  editFechaFinal: Date ;
  editImagen: String ;
  añoInicio: number;
  añoFinal: number;
  idEditExp: number = null;


  ngOnInit(): void {
    this.cargarExperiencia();
  }


  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.exp = data; });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.cargo = "";
    this.descripcion = "";
    this.institucionLaboral = "";
    this.fechaInicio = null;
    this.fechaFinal = null;
    this.imagen = "";
  }

  crearExp(): void {
    const exp = new Experiencia(this.cargo, this.institucionLaboral, this.descripcion, this.fechaInicio, this.fechaFinal, this.imagen);
    this.sExperiencia.save(exp).subscribe({
      next:
        data => {
          alert("Experiencia añadida");
          this.router.navigate([''])
          this.cargarExperiencia();


        }, error: () => {
          console.log("Error al cargar");
          this.cargarExperiencia();
        }
    })
  }

  tomarId(id: number): void {
    this.idEditExp = id;
    this.sExperiencia.detail(this.idEditExp).subscribe({
      next:
        data => {
          this.editExp = data;
          this.editCargo = this.editExp.cargo;
          this.editDescripcion = this.editExp.descripcion;
          this.editInstitucionLaboral = this.editExp.institucionLaboral;
          this.editFechaInicio = this.editExp.fechaInicio;
          this.editFechaFinal = this.editExp.fechaFinal;
          this.editImagen = this.editExp.imagen;
          const añoInicio = this.editFechaInicio.getFullYear();
          const añoFinal = this.editFechaFinal.getFullYear();
          console.dir(this.editExp);

        }, error: () => { console.log("Error al leer id") }
    })
  }

  editarExp(): void {

    const editExp1 = new Experiencia(this.editCargo, this.editInstitucionLaboral, this.editDescripcion, this.editFechaInicio, this.editFechaFinal, this.editImagen);
    this.sExperiencia.update(this.idEditExp, editExp1).subscribe({
      next:
        data => {
          this.cargarExperiencia();

        }, error: () => {
          console.log("Error al editar " + this.idEditExp);
          console.log(editExp1);
          this.cargarExperiencia();
        }
    })
  }

  eliminarExp(id?: number) {
    this.sExperiencia.delete(id).subscribe(
      {
        next: () => {
          this.cargarExperiencia();
        }, error: () => {
          console.log("Error al eliminar");
          this.cargarExperiencia();
        }
      })
  }

}

