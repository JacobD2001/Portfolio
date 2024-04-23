import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-video',
  templateUrl: './about-video.component.html',
  styleUrl: './about-video.component.scss'
})
export class AboutVideoComponent implements OnInit {

  @Input() storedTheme: any;

  constructor() { }

  ngOnInit(): void {
  }

}
