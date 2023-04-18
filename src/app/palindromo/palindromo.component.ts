import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  text : string = '';
  texto : string = '';
  inverso1 : string = '';
  resultado : string = '';

  isPalindromo() : void {
    let inverso = this.text.split('').reverse(). join('');
    this.inverso1 = inverso;
    this.texto = this.text;

    if (this.text == inverso){
      this.resultado = "É um Palindromo!";
    } else {
      this.resultado = "Não é um Palindromo!";
    }

  }
}
