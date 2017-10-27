import { Component, OnInit, } from '@angular/core';
import {SubmitForm} from "./submitForm.service";


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
  providers:[SubmitForm]
})
export class AddProfileComponent implements OnInit {
  constructor(private service:SubmitForm) { }
  pImage = "";
  convertPhoto(input){
    var file:File = input.files[0];
    var reader:FileReader = new FileReader();
    if(file.size <= 510000)
    {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
      var base64image = reader.result;
      //console.log(base64image);
      this.pImage =  base64image;
      };
    }
  }

submitForm(data){
  data.value.profilePic = this.pImage;
  if (data.value.teamDepartment == "managment"){
    data.value.weight = "0";
    data.value.height = "0";
  }
  //console.log(data)
  this.service.submitForm(data.value);
  } 

  show(tag:any){
    console.log(tag);
  }


  ngOnInit() {
  }

}
