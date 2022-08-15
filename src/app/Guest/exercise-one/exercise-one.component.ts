import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/Models/category';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Categories: Category[] =[

   {name:"Home"},
   {name:"Electronics"},
   {name:"Fashion"}
  ]


  
  

}
