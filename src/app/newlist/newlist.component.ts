import { Component, OnInit } from '@angular/core';
import {Lists} from '../models/Lists';
import {  FormBuilder, FormGroup,  Validators }from '@angular/forms';
@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent  {


 model = new Lists(1,'item3','type3')

 submitted = false;

  ngOnInit() {
  	

  }

  onSubmit(){
  	this.submitted = true;}
  	


}
