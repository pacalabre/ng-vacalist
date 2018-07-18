import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	linkOne = "About Us";
	linkTwo = "Listings";
	linkThree = "Favorites";
	linkFour = "Check Out";

  constructor() { }


  ngOnInit() {
  }

}
