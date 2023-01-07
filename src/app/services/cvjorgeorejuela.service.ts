import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvjorgeorejuelaService {

  profesional: any[] = [];
  experiencia: any[] = [];
  educacion: any[] = [];
  servicios: any[] = [];
  testimonio: any[] = [];

  constructor(private http: HttpClient) {
    // console.log('probando json firebase');
    this.CargarProfesional();
    this.CargarExperiencia();
    this.CargarEducacion();
    this.CargarServicios();
    this.CargarTestimonio();
  }

  private CargarProfesional() {
    this.http.get('https://cv-jorgeorejuela-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe (( resp: any) => {
        this.profesional = resp;
        console.log(resp);
      });
  }
  
  private CargarExperiencia() {
    this.http.get('https://cv-jorgeorejuela-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe (( resp: any) => {
        this.experiencia = resp;
        console.log(resp);
      });
  }
  
  private CargarEducacion() {
    this.http.get('https://cv-jorgeorejuela-default-rtdb.firebaseio.com/Educación.json')
      .subscribe (( resp: any) => {
        this.educacion = resp;
        console.log(resp);
      });
  }
  
  private CargarServicios() {
    this.http.get('https://cv-jorgeorejuela-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe (( resp: any) => {
        this.servicios = resp;
        console.log(resp);
      });
  }
  
  private CargarTestimonio() {
    this.http.get('https://cv-jorgeorejuela-default-rtdb.firebaseio.com/Testimonios.json')
      .subscribe (( resp: any) => {
        this.testimonio = resp;
        console.log(resp);
      });
    }
    
}
