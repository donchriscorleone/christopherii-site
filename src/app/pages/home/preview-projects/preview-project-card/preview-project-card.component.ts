import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'preview-project-card',
  templateUrl: './preview-project-card.component.html',
  styleUrls: ['./preview-project-card.component.scss']
})
export class PreviewProjectCardComponent implements OnInit {
  @Input() card!: Card

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Card {
  title: string,
  description: string,
  github: string,
  liveSite: string,
  imgPath: string,
}