export class AddContactResponse{
	public status:string|null=null;


	static fromJson(o:any):AddContactResponse{
		let resp=new AddContactResponse();
		resp.status=o.status;
		return resp;
	}
	public isSuccessful():boolean{
		return this.status=='ok';
	}
}