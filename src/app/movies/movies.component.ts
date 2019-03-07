import { Component } from '@angular/core';

@Component({
  selector: 'movies',
  template:`
          {{movies.name | uppercase}}<br />
          {{movies.rating | number:'1.1-1'}}<br />
          {{movies.viewers | number}}<br />
          {{movies.price | currency:'IND':'Rs':'2.1-1'}}<br />
          {{movies.releaseDate | date:'mediumDate'}}<br />
          {{ text | summary }}<br />
          {{ today | date }}
          `
})
export class MoviesComponent {
  text=`
  The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year, The heat will be more bearable in several states this year
  `
  today = Date.now();
  constructor() { }

  movies ={
    name:"Die Hard",
    rating: 4.9754,
    viewers:30123,
    price:23.65,
    releaseDate: new Date(2019,3,1),
    
  }

}
