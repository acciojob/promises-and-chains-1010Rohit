//your JS code here. If required.
function handleSubmit(age,name) {
	if(!age || !name ){
		alert ( "Please enter valid details")
		return;
	}
	let myPromise = new Promise((resolve,reject)=>{
		if(age<18){
		resolve("Oh sorry. You aren't old enough.")
	}else{
		reject("Welcome, . You can vote.")
	}
		
	})
	
}