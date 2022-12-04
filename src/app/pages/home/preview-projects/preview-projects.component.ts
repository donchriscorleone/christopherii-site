import { Component, OnInit } from '@angular/core';
import { Card } from './preview-project-card/preview-project-card.component';

@Component({
  selector: 'app-preview-projects',
  templateUrl: './preview-projects.component.html',
  styleUrls: ['./preview-projects.component.scss']
})
export class PreviewProjectsComponent implements OnInit {
  private assetPath = "/assets/project-images/"
  cards: Card[] = [
    {
      title: "Job Listing Application",
      description: "Static data using plain CSS and JS",
      github: "https://github.com/donchriscorleone/job-listings-with-filtering-solution",
      liveSite: "https://donchriscorleone.github.io/job-listings-with-filtering-solution/",
      imgPath: this.assetPath + "joblisting.png",
    },
    {
      title: "Job Listing Application",
      description: "Static data using plain CSS and JS",
      github: "https://github.com/donchriscorleone/job-listings-with-filtering-solution",
      liveSite: "https://donchriscorleone.github.io/job-listings-with-filtering-solution/",
      imgPath: this.assetPath + "joblisting.png",
    },
    {
      title: "Job Listing Application",
      description: "Static data using plain CSS and JS",
      github: "https://github.com/donchriscorleone/job-listings-with-filtering-solution",
      liveSite: "https://donchriscorleone.github.io/job-listings-with-filtering-solution/",
      imgPath: this.assetPath + "joblisting.png",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
