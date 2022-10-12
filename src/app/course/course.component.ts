import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
   course=[

    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typeseting industry','image':'../../assets/angular.jpeg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typeseting industry','image':'../../assets/typescript.jfif'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typeseting industry','image':'../../assets/nodejs.png'},
    {'id':4,'name':'Learn React','description':'Lorem Ipsum is simply dummy text of the printing and typeseting industry','image':'../../assets/react.jfif'},
  ]


}
