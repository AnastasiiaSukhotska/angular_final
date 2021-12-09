export class LoginRequest{
	constructor(public login:string, public password:string){}

	clean(){
		this.login='';
		this.password='';
	}
}