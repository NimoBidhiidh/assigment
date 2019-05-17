import { Component, OnInit } from '@angular/core';
import {Lists} from '../models/Lists';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

lists:Lists[];

  constructor() { }

  ngOnInit() {
	  this.lists = [
	  {
	  	id:1,
	  	item:"item1",
	  	type:"type1"
	  },
	  {
	  	id:2,
	  	item:"item2",
	  	type:"type2"
	  }
	  ]
  }

}
