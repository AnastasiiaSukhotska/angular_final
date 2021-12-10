export class AddContactRequest{
	constructor(public type:string, public value:string, public name:string){}
	public toJson():any{
		return{
			type:this.type,
			value:this.value,
			name:this.name
		};
	}


	clean(){
		this.name='';
		this.value='';
		this.name='';
	}
}