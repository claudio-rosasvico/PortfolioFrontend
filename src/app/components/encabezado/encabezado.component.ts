import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;

  constructor(private tokenService: TokenService) {   }

  ngOnInit() {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
