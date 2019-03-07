import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = [ 
  { id:'1',name:'Course1'},
   { id:'2',name:'Course2'},
   { id:'3',name:'Course3'}];
  viewMode ="map"
    courses1;
  onAdd(){
    this.courses.push({id:'4',name:'Course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1);
  }

  onUpdate(course){
    course.name ="Changed"
  }

  loadCourses(){
    this.courses1=[
      { id:'1',name:'Course1'},
      { id:'2',name:'Course2'},
      { id:'3',name:'Course3'}
    ];
  }

  trackCourse(course){
      return course ? course.id : undefined;  
  }
  constructor() { }

  ngOnInit() {
  }

}
