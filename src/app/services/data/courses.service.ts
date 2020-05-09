import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Data {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url: string = 'http://localhost:1337'
  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(`${this.url}/courses`);
  }

  getSingleCourse(id: number) {
    return this.http.get(`${this.url}/courses/${id}`);
  }
}
