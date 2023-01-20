import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-registered-users',
  templateUrl: './card-registered-users.component.html',
  styleUrls: ['./card-registered-users.component.css']
})
export class CardRegisteredUsersComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() otherUsers!: string;
  @Input() regStatus!: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
    console.log(this.imgSrc);
    
  }

}
