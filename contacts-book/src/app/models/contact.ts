export class Contact{
	public name: string|null=null;
	public value: string|null=null;
	public type: string|null=null;

	static fromJson(o:any):Contact{
		let c=new Contact();
		c.name=o.name;
		c.value=o.date_born;
		c.type=o.type;
		return c;
	}
}