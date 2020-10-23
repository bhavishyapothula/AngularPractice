import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, ...args: unknown[]): unknown {
    if(array)
    {
      let sortField:any=args[0];
      let sortDirection:any=args[1];
      let modifier=1;
      if(sortDirection==='desc')
      {
        modifier=-1;
      }
      array.sort((a:any,b:any)=>{
        if(a[sortField]<b[sortField])
        {
          return -1*modifier;
        }
        else if(a[sortField]>b[sortField])
        {
          return 1*modifier;
        }
        else{
          return 0;
        }
      });
      return array;
    }
  }

}
