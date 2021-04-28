import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

dataAtual: Date = new Date();
texto = 'esse é um texto simples';
valor = 10.55;

  constructor() {

  }

  ngOnInit(): void {
  }

}
