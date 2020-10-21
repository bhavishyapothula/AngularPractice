import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private _teachersource=new Subject<string>();
teachermsg$=this._teachersource.asObservable();
  constructor() { }
  send(message:string)
  {
    this._teachersource.next(message);
  }
}
