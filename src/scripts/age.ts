let birthdate = '2007-02-09';
export let age: any = getAge(birthdate);

function getAge(birthdate: any) {
	let today = new Date();
	let birthDate = new Date(birthdate);
	let age = today.getFullYear() - birthDate.getFullYear();
	let month = today.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}
