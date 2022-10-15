import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  details: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDetails().subscribe((data) => {
      this.details = data;
    });
  }

}
