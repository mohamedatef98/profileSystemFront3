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

  //the value of the image(base64)
  pImage = "";

  //function that gets executed when the photo is changed to convert the image to base64
  convertPhoto(input){
    var file:File = input.files[0];
    var reader:FileReader = new FileReader();
    if(file.size <= 510000)
    {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
      var base64image = reader.result;
      this.pImage =  base64image;
      };
    }
  }

/* method that gets executed on the form submissin to execute the service and send the POST
request with the form data */
submitForm(data){
  data.value.profilePic = this.pImage;


  if(data.value.teamDepartment === 'managment'){
    data.value.weight = Number(0);
    data.value.height = Number(0);
  }
  else{
    data.value.weight = Number(data.value.weight);
    data.value.height = Number(data.value.height);
  }


  if(data.value.parent2mobile === ''){
    data.value.parent2mobile = Number(0);
  }
  else{
    data.value.parent2mobile = Number(data.value.parent2mobile);
  }
  
  data.value.graduationYear = Number(data.value.graduationYear);

  } 


  ngOnInit() {
  }

}
