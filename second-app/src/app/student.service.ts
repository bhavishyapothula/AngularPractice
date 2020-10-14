import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpResponse} from '@angular/common/http'
import { IStudent } from './student';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { of,pipe } from 'rxjs';
import { map,filter,retry, catchError } from 'rxjs/operators';

const nums = of(1,2,3,4);

// const cubeValues = map((val: number) => val*val*val);
// const cubedNums = cubeValues(nums);

// cubedNums.subscribe(x => console.log(x));

const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

const squareOdd = squareOddVals(nums);

squareOdd.subscribe(x => console.log(x));

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private _url:string="/assets/data/students.json"
  constructor(private http:HttpClient) { }

  getDetails():Observable<IStudent[]>
  {
    //  return [
    //    {id:1,name:'bhavishya',subject:'maths'},
    //  {id:3,name:'virat',subject:'social'}
    //  ];
    
   //return this.http.get<IStudent[]>(this._url).catch(this.errorHandler);
   return this.http.get<IStudent[]>(this._url).pipe(
    retry(3), 
    catchError(this.errorHandler) 
  );
   }
  
  errorHandler(error:HttpErrorResponse)
  {
    return Observable.throw(error.message||'Server Error');
  }
}
