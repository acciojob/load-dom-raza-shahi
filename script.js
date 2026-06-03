//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
	const output = document.createElement('p');
	output.innerText = "DOM load success";
	document.body.appendChild(output);
})