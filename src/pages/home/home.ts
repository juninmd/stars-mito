import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mainState: any;
  som: string;
  playerMito: any = {
    position: 0
  }

  constructor(public navCtrl: NavController, private element: ElementRef) {
    this.init();
  }

  private init() {
    this.mainState = {
      preload: () => {

      },

      start: () => {

      },

      update: () => {

      },
      walkPlayer: () => {
        this.descer();
      }
    };
    setInterval(() => {
      this.mainState.walkPlayer();
    }, 10);
  }

  tocarSom(nome: any) {
    this.som = `assets/${nome}.mp3`;
    let audio = <any>document.getElementById("audio");
    audio.play();
  }
 
  descer() {
    let mito = <any>document.getElementById('mito');
    mito.style.top = (++this.playerMito.position) + "px";
  }

  canalhas() {
    this.tocarSom('canalhas');
  }

  jump() {
    let mito = <any>document.getElementById('mito');
    mito.style.top = (this.playerMito.position = (this.playerMito.position - 80)) + "px";
  }
}
