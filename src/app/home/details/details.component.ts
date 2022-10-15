import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productID: any;
  products: any;
  constructor(private route: ActivatedRoute, private api: ApiService) { 
    this.route.params.subscribe((data) => {
      this.productID = data['id'];
    });
  }

  ngOnInit(): void {
    this.api.getproductDetails(this.productID).subscribe((data) => {
      this.products = data;
    });
  }

}
