import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  editEdu: Educacion;
  editEdu1: Educacion;
  isLogged = false;
  roles: string[];
  isAdmin = false;
  nivel: String;
  institucion: String;
  localidad: String;
  titulo: String;
  imagen: String;
  editNivel: String;
  editInstitucion: String;
  editLocalidad: String;
  editTitulo: String;
  editImagen: String;
  idEditEdu: number = null;

  constructor(private sEducacion: EducacionService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEducacion()
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => { this.edu = data; });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.nivel = "";
    this.institucion = "";
    this.localidad = "";
    this.titulo = "";
    this.imagen = "";
  }

  crearEdu(): void {
    const edu = new Educacion(this.nivel, this.institucion, this.localidad, this.titulo, this.imagen);
    this.sEducacion.save(edu).subscribe({
      next:
        data => {
          alert("Formación añadida");
          this.router.navigate([''])
          this.cargarEducacion();


        }, error: () => {
          console.log("Error al cargar");
          this.cargarEducacion();
        }
    })
  }

  tomarId(id: number): void{
    this.idEditEdu = id;
    this.sEducacion.detail(this.idEditEdu).subscribe({next:
    data =>{
      this.editEdu = data;
      this.editNivel = this.editEdu.nivel
      this.editInstitucion = this.editEdu.institucion
      this.editLocalidad = this.editEdu.localidad
      this.editTitulo = this.editEdu.titulo
      this.editImagen = this.editEdu.imagen
      console.dir(this.editEdu);
      
    }, error: () => {console.log("Error al leer id")}
  })
  }

  editarEdu(): void {

    const editEdu1 = new Educacion(this.editNivel, this.editInstitucion, this.editLocalidad, this.editTitulo, this.editImagen);
    this.sEducacion.update(this.idEditEdu, editEdu1).subscribe({
      next:
        data => {
          this.cargarEducacion();

        }, error: () => {
          console.log("Error al editar " + this.idEditEdu);
          console.log(editEdu1);
          this.cargarEducacion();
        }
    })
  }

  eliminarEdu(id?: number) {
    this.sEducacion.delete(id).subscribe(
      {
        next: () => {
          this.cargarEducacion();
        }, error: () => {
          console.log("Error al eliminar");
          this.cargarEducacion();
        }
      })
  }

}
