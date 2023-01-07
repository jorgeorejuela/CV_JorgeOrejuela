import { CvjorgeorejuelaService } from './../services/cvjorgeorejuela.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvjorgeorejuelaService) { // Variable local para consumir los servicios de firebase

  }

  ngOnInit(): void {
  }

}
