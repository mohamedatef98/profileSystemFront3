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
/* pImage = "data:image/jpeg;base64,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…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"; */
pImage = 'assets/welcome.jpg';


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
  if (this.currentMode === 'viewing'){

    this.currentMode = 'editing';
 
  }
  else if (this.currentMode === 'editing'){
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
  console.log(JSON.stringify(form.value));
  this.edit.editProfile(form.value,this.id);
  this.changeMode();
  
  
}
//getting the profile from the id
  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.id = id;
    this.http.get("http://127.0.0.1:8000/ASUmembers/"+id+"/").subscribe(
        response => {
            this.profile = response.json();
            this.pImage = this.profile.profilePic;
        }
    )

}
}
