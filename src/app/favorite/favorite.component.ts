import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  //styleUrls: ['./favorite.component.css'],
  styles:[
    `
    .glyphicon-star {
      color: pink;
  }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
  
})

export class FavoriteComponent{
  /* Input Property defined while using 
  favorite component and alisa name in ('') as isFavorite */
  @Input('isFavorite') isSelected : boolean; 
  /* Output Property defined when some custom 
  event is performed on that component and 
  using emitter to pass the value*/
  @Output('change') event_change = new EventEmitter();  
  
  onClick(){
    this.isSelected = !this.isSelected;
    //this.event_change.emit(this.isSelected);  //This is passing a value to custom change event
    this.event_change.emit({value: this.isSelected}); //This is passing an object to custom change event
  }
  
}

/* Used for TypeAnnotation and compiletime checking 
and intellisense when dealing with complex objects 
in custom event passing parameter */
export interface FavoriteChangedEventArgs{
  newvalue : boolean;
}
