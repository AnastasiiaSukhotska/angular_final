import { Component, OnInit,Inject } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-active-contact',
  templateUrl: './active-contact.component.html',
  styleUrls: ['./active-contact.component.css']
})
export class ActiveContactComponent{

  public contact:Contact|null=null;
  constructor(@Inject(ContactsService) private contactsService:ContactsService){
    contactsService.getActiveContact().subscribe(c=>this.contact=c);
  }

}
