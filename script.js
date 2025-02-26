//your JS code here. If required.
function handleSubmit(age,name) {
	alert(name,age)
	if(!age || !name ){
		alert ( "Please enter valid details")
		return;
	}
	let myPromise = new Promise((resolve,reject)=>{
		if(age18){
		resolve("Oh sorry. You aren't old enough.")
	}else{
		reject("Welcome, . You can vote.")
	}
	setTimeOut(()=>{
		myPromise.then((result) => {
    console.log(result); 
}).catch((error) => {
    console.error(error); // This would execute if the promise was rejected
});
	},4000);
	})
	
}