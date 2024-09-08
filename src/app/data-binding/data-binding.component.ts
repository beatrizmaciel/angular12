import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://www.meu-site.com/';

  cursoAngular = true;

  urlImagem = 'https://cdn-icons-png.flaticon.com/256/10806/10806489.png';

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
