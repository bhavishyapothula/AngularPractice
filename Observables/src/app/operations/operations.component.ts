import { Component, OnInit } from '@angular/core';
import {  fromEvent, Observable ,interval, Subject, of} from 'rxjs';
import {map,throttleTime,filter,debounceTime, distinctUntilChanged, reduce, scan,pluck,mergeMap, switchMap} from 'rxjs/operators'; 
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
 para:any;
 inp1:any;
 inp2:any;
 obs1;
 obs2;
 obs;
 inputEle;
  constructor() { }

  ngOnInit(): void {
    var observer={
      next:function(data){
        console.log(data);
      },
      error:function(error){
        console.log(error);
      },
      complete:function()
      {
        console.log('Completed');
      }
    }

// this.inp1=document.querySelector('#input1');
// this.obs1=fromEvent(this.inp1,'input');
// this.inp2=document.querySelector('#input2');
// this.obs2=fromEvent(this.inp2,'input');
// this.obs1
// .pipe(mergeMap((event1:any)=>{
//   return this.obs2.pipe(map((event2:any)=>event1.target.value+' '+event2.target.value))}))
//   .subscribe((data)=>console.log(data));


    // this.inputEle=document.querySelector('input');
    //  fromEvent(this.inputEle,'input')
    //  .pipe(pluck('target','value'),debounceTime(2000),distinctUntilChanged())
    //  .subscribe((data:any)=>console.log(data));
    

    // this.para=document.querySelector('button');
    // console.log(this.para);
    // fromEvent(this.para,'click')
    //  .pipe(throttleTime(3000),map((data:any)=>{return data.clientY}))
    //  .subscribe(observer);



    // Observable.create(function(obs){
    //   obs.next('A value'),
    //   //obs.error('Error'),
    //   setTimeout(function(){
    //     obs.complete();
    //   },2000)
    //   obs.next('Next value');
      
    // }).subscribe(observer);


// interval(1000)
// .pipe(map((data)=>data*2),throttleTime(2000))
// .subscribe(observer).unsubscribe();


// interval(1000)
// .pipe(filter((data)=>data%2==0))
// .subscribe(observer).unsubscribe();


// of(1,2,3,4,5)
// .pipe(reduce((total:number,curval:number)=>{return total+curval},0))
// .subscribe((data)=>console.log(data));

// of(1,2,3,4,5)
// .pipe(scan((total:number,curval:number)=>{return total+curval},0))
// .subscribe((data)=>console.log(data));


this.obs=interval(1000);

this.inputEle=document.querySelector('button');
fromEvent(this.inputEle,'click')
.pipe(switchMap((event)=>{
  return this.obs;
}))
.subscribe((data)=>console.log(data));
 


    
  }

}
