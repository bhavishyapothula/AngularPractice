import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  constructor(private _interactionService:InteractionService){}
greet()
{
  this._interactionService.send('Good morning');
}
appr()
{
  this._interactionService.send('Well done');
}
}
