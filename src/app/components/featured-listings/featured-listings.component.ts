import { ListService } from '../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.css']
})
export class FeaturedListingsComponent implements OnInit {
  listOfPosts = [];
  listOfFeatured=[];
  isLiked = false; 

  toggleLiked($event) {
    this.isLiked = !this.isLiked;
    console.log($event);
  }

  filterFeaturedListings() {
    for(let i=0; i < this.listOfPosts.length; i++) {
      if(this.listOfPosts[i].isFeatured === true) {
        this.listOfFeatured.push(this.listOfPosts[i]);
      }
    }
  }

  constructor(private service: ListService) {
  }

  ngOnInit() {
    this.service.getAllListings()
    .subscribe(res => {
      console.log(res.listings);
      this.listOfPosts = res.listings;
      this.filterFeaturedListings();     
    })
  }

}
