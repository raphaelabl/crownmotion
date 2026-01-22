import { Injectable } from '@angular/core';
import { Course, DanceStyle, Performance, Experience, ContentImage, Qualifications } from '../models/data.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  API_URL = environment.BACKEND_API


  constructor(private http: HttpClient){}

  getDanceStyles(): Observable<DanceStyle[]> {
    return this.http.get<DanceStyle[]>(this.API_URL + "/dance_styles/")
  }

  getQualifications(): Observable<Qualifications[]>{
    return this.http.get<Qualifications[]>(this.API_URL + "/qualification/")
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API_URL + "/course/")
  }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.API_URL + "/experiences/")
  }

  getPerformances(): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.API_URL + "/performances/")
  }

  getGalleryItems(): Observable<ContentImage[]> {
    return this.http.get<ContentImage[]>(this.API_URL + "/content_image/")
  }
}

