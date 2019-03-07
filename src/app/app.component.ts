import { Component, Input } from '@angular/core';
import { likesComponent } from './like.component';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<likes></likes>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() isMulti = true;
  post ={
    title : 'Angular App',
    isFavorite: true,
    comment:{
      social: null,
      formal: 'Hello'
    }
    // isMulti:true
  }
  canSave = true;

  // Passing a value to custom event
  // onFavoriteChanged(status){
  //   console.log('Favorite Changed: ',status);
  // }

  // Passing an object to custom event
  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs){
    console.log('Favorite Changed: ',eventArgs);
  }
  onUserClick(){
    console.log("User clicked!!!");
  }

}
