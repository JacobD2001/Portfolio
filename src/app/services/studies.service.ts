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
    // {
    //   id: 7,
    //   title: 'React Redux',
    //   image: '../../assets/certifications/react.png',
    //   link: '../../assets/certifications/react.png',
    // },
    // {
    //   id: 8,
    //   title: 'Game Development in Javascript',
    //   image: '../../assets/certifications/games_js.png',
    //   link: '../../assets/certifications/games_js.png',
    // },
    // {
    //   id: 9,
    //   title: 'Python for Beginners',
    //   image: '../../assets/certifications/python_beginners.png',
    //   link: '../../assets/certifications/python_beginners.png',
    // },
    // {
    //   id: 10,
    //   title: 'Intermediate Python',
    //   image: '../../assets/certifications/python_intermediate.png',
    //   link: '../../assets/certifications/python_intermediate.png',
    // },
    // {
    //   id: 11,
    //   title: 'Python Data Structures',
    //   image: '../../assets/certifications/python_structures.png',
    //   link: '../../assets/certifications/python_structures.png',
    // },
    // {
    //   id: 12,
    //   title: 'Python for Data Science',
    //   image: '../../assets/certifications/python_science.png',
    //   link: '../../assets/certifications/python_science.png',
    // },
  ];

  getStudies(){
    return this.studies;
  }
  getStudyById(id: number){
    return this.studies.filter(study => study.id == id);
  }
}
