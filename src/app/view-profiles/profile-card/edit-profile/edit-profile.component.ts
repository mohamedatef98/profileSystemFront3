import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {EditProfile} from './editProfile.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers : [EditProfile]
})
export class EditProfileComponent implements OnInit {
  constructor(private route:ActivatedRoute
                ,private http:Http,private edit:EditProfile) { }

//the selected profile
profile:any;
//the id of the selected profile in the database
id = 0;

//the base64 image of the selected profile
pImage = "";


//converting the new profile image if it was only changed
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

//Cases of viewing or editing because this page has two states (viewing,editing)
currentModeCases = {
  'editing':{'buttonType':'submit','buttonText':'Submit','buttonClass':'btn btn-primary btn-lg btn-block','dataEditable':true},
  'viewing':{'buttonType':'button','buttonText':'Edit','buttonClass':'btn btn-success btn-lg btn-block','dataEditable':false}
};
//Current state
currentMode:string = 'viewing';


//method that changes the state (mode) , it is executed when the button is pressed
changeMode(){
  if (this.currentMode == 'viewing'){
    this.currentMode = 'editing';
  }
  if (this.currentMode == 'editing'){
    this.currentMode = 'viewing';
  }

}

//Submitted the edited form
submitForm(form){
  if (this.pImage === ''){
    form.value.profilePic = this.profile.profilePic;
  }
  else{
    form.value.profilePic = this.pImage;
  }
  this.edit.editProfile(form,this.id);
  this.changeMode();
  
}
//getting the profile from the id
  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.id = id;
    this.http.post('http://127.0.0.1:8000/persons/',{'id':id}).subscribe(
        response => {
            this.profile = (response.json())[0];
            this.pImage = this.profile.profilePic;
        }
    )

}
}
