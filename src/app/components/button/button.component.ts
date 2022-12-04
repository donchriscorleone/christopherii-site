import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: "button" | "submit" | "icon" = "button";
  @Input() iconName!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
