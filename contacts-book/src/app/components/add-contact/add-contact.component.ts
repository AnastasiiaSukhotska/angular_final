import { Component, OnInit, Inject } from '@angular/core';
import {AddContactRequest} from '../../models/add-contact-request';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public addContactRequest=new AddContactRequest('','','');
  public error:string|null=null;
  constructor(@Inject(ContactsService) private contactsService:ContactsService) { }

  addContact(){
    if(!this.addContactRequest.name||!this.addContactRequest.type||!this.addContactRequest.value){
      alert('Fill form')
      return;
    } 
    this.contactsService.addContacts(this.addContactRequest)
    .subscribe(r=>{
      if(!r.isSuccessful()) this.error=r.error;
    });
      alert('Contact added!')
      this.addContactRequest.clean();

  }



  ngOnInit(): void {
    this.error=null;
   
  }

}
  


  
