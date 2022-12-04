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
      title: "IP Address Tracker",
      description: "Using Plain JS, CSS, LeafletJS, and Ipify",
      github: "https://github.com/donchriscorleone/ip-address-tracker-master",
      liveSite: "https://ip-address-tracker-devchristopherii.netlify.app/",
      imgPath: this.assetPath + "ipaddresstracker.png",
    },
    {
      title: "URL Shortening Page",
      description: "Mobile first workflow using CSS and JS",
      github: "https://github.com/donchriscorleone/shortly-url-shortening-api-challenge-solution",
      liveSite: "https://donchriscorleone.github.io/shortly-url-shortening-api-challenge-solution/",
      imgPath: this.assetPath + "urlshortening.png",
    },
    {
      title: "Manage Landing Page",
      description: "Creating landing page using plain CSS and JS",
      github: "https://github.com/donchriscorleone/manage-landing-page-solution",
      liveSite: "https://donchriscorleone.github.io/manage-landing-page-solution/index.html",
      imgPath: this.assetPath + "managelanding.png",
    },
    {
      title: "Easybank Landing Page",
      description: "Mobile first approach using plain CSS and JS",
      github: "https://github.com/donchriscorleone/easybank-landing-page",
      liveSite: "https://donchriscorleone.github.io/easybank-landing-page/",
      imgPath: this.assetPath + "easybanklanding.png",
    },
    {
      title: "Fylo Dark Theme Landing Page",
      description: "Mobile first approach using plain CSS and JS",
      github: "https://github.com/donchriscorleone/fylo-dark-theme-landing-page-master",
      liveSite: "https://donchriscorleone.github.io/fylo-dark-theme-landing-page-master/",
      imgPath: this.assetPath + "fylodarklanding.png",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
