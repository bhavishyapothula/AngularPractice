import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getDetails()
  {
    return this.http.get('https://student-12045.firebaseio.com/students.json');
  }
setDetails(stuname)
{
  return this.http.post('https://student-12045.firebaseio.com/students.json',{"name":stuname});
}
reset()
{
  return this.http.delete('https://student-12045.firebaseio.com/students.json');
}
}
