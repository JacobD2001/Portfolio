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
      title: 'MTA Security Fundamentals',
      image: '../../assets/certifications/php.png',
      link: 'https://www.credly.com/badges/97c20b3a-bc7c-4656-87d8-e52577332a96/public_url',
    },
    {
      id: 2,
      title: 'MTA Database Administration',
      image: '../../assets/certifications/php.png',
      link: 'https://www.credly.com/badges/385e97bd-e2ea-4997-89b5-aa714fef74e3/public_url',
    },
    {
      id: 3,
      title: 'MTA Software Development',
      image: '../../assets/certifications/php.png',
      link: 'https://www.credly.com/badges/ff9c7db0-2dc8-4f2e-8e15-fc84ec27f7ff/public_url',
    },
  ];

  getStudies(){
    return this.studies;
  }
  getStudyById(id: number){
    return this.studies.filter(study => study.id == id);
  }
}
