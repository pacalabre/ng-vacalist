import { ListService } from '../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nonfeatured-listings',
  templateUrl: './nonfeatured-listings.component.html',
  styleUrls: ['./nonfeatured-listings.component.css']
})
export class NonfeaturedListingsComponent implements OnInit {
  listOfPosts = [];
  listOfNotFeatured=[];

  filterNotFeaturedListings() {
    for(let i=0; i < this.listOfPosts.length; i++) {
      if(this.listOfPosts[i].isFeatured === false) {
        this.listOfNotFeatured.push(this.listOfPosts[i]);
      }
    }
  }

  constructor(private service: ListService) { }

    ngOnInit() {
      this.service.getAllListings()
      .subscribe(res => {
        this.listOfPosts = res.listings;
        this.filterNotFeaturedListings();     
    })
  }

}
