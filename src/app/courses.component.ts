import {Component, Input} from '@angular/core'
import {CourseService} from './course.service'
// import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector:'courses',
    template:`
        <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        <br/>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Mouse Events</button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUpBind()" />
    `
    // template:`
    //         <h2>Courses</h2>
    //         <b>{{ "Title: "+getTitle() }}</b>
    //         <ul>
    //             <li *ngFor="let course of courses">
    //                 {{ course }}
    //             </li>
    //         </ul>
    //         <img [attr.src]="imageUrl" />
    //         <table>
    //         <tr>
    //             <td [attr.colspan]="colSpan"></td>
    //         </tr>
    //         </table>
                // <input #name (keyup.enter)="onKeyUp(name.value)" />
                // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUpBind()" /> 
    //         `,
    // providers: [CourseService],
    // directives: [AutoGrowDirective]
})
export class CoursesComponent{
    title: string = "The title of courses page";
    courses;
    imageUrl="D:/Photos&Docs/45.jpg";
    colSpan = 2;    //Attribute binding
    isActive = true;    //class binding
    email="me@example.com";     //event filtering
    @Input() isFavorite: boolean;
    

    getTitle(){
        return this.title;
    }
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

    onSave($event){
        $event.stopPropagation(); //To stop event bubbling
        console.log('Button Clicked!!', $event);
    }

    // For Event bubbling
    onDivClicked() 
    {
        console.log('Div clicked!!');
    }

    // For Event handling and Filtering
    onKeyUp(name)
    {
        console.log("ENTER was pressed");
        //console.log($event.target.value);
        console.log(name);
    }

    onKeyUpBind(){
        console.log(this.email);
    }
}