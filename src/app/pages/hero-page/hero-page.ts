import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPage {
 name = signal('Iromnan');
 age =  signal(45);

 heroDescription = computed(() => {
  const description = `${this.name()} - ${this.age()}`;
  return description;
 })
//  getHeroDescription() {
//   return `${this.name()} - ${this.age()}`;
//  }

  capitalizeName = computed(() => this.name().toUpperCase());

 changeHero() {
  this.name.set('Spiderman');
  this.age.set(22);
 }

 resetForm(){
  this.name.set('Iroman');
  this.age.set(45);
 }

 changeAge() {
  this.age.set(60);
 }

}
