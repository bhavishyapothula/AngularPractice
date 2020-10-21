import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _interactionService:InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teachermsg$.subscribe(msg=>{
if(msg==='Good morning')
alert('Good mrng teacher');
else if(msg==='Well done')
alert('Thank u');

    })
  }

}
