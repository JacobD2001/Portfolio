import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studies } from '../interfaces/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  constructor(private http: HttpClient) { }

  studies: Studies[] = [
    {
      id: 1,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
    {
      id: 2,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
    {
      id: 3,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
    {
      id: 4,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
    {
      id: 5,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
    {
      id: 6,
      title: 'Php',
      image: '../../assets/certifications/php.png',
      link: '../../assets/certifications/php.png',
    },
  ];

  getStudies(){
    return this.studies;
  }
  getStudyById(id: number){
    return this.studies.filter(study => study.id == id);
  }
}
