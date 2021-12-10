export class AddContactResponse{
	public status:string|null=null;
	public error:string|null=null;


	static fromJson(o:any):AddContactResponse{
		let resp=new AddContactResponse();
		resp.status=o.status;
		resp.error=o.error;
		return resp;
	}
	public isSuccessful():boolean{
		return this.status=='ok';
	}
}