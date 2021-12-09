import {Contact} from './contact';
export class GetContactResponse{
	public status:string|null=null;
	public error:string|null=null;
	public contacts:Contact[]|null=null;

	static fromJson(o:any):GetContactResponse{
		let resp=new GetContactResponse();
		resp.error=o.error;
		resp.status=o.status;
		if(o.contacts !=null) resp.contacts=(o.contacts as any[]).map(c=>Contact.fromJson(c))
		return resp;
	}
	public isSuccessful():boolean{
		return this.status=='ok';
	}
}