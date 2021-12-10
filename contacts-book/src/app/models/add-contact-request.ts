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
		this.type='';
		this.value='';
		this.name='';
	}
}