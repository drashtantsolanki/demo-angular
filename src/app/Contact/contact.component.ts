import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  min:number = 25;
  max:number = 45;
  contactForm=this.fb.group({
    Name:['',[Validators.required,Validators.pattern("[a-zA-Z]+")]],
    Age:['',[Validators.required,Validators.pattern('[0-9]+')]],
    Email:['',(Validators.required,Validators.email)],
    Message:['']
  })
  
  ngOnInit(): void {
  }

  get formControls()
  {
    return this.contactForm.controls
  }


}
