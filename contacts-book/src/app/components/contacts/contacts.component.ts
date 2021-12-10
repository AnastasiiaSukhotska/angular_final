import { Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../models/contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  public contacts:Contact[]=[];
 
   public activeContact:any;
  constructor(@Inject(ContactsService) private contactsService:ContactsService ) { }

   changeContact(contact:any){
    this.activeContact=contact;
    this.contactsService.activateContact(contact);
  }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(r=>{
      if(r.contacts!=null) this.contacts=r.contacts
    });

  }

   ngOnDestroy(): void {
    this.contacts=[];

}

}
