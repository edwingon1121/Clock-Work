//Check local Storage as to whether user agrees to allow acess to weather
// If not defined then we set to default value
function getLSTerm(term){
	const ls = window.localStorage;
	if (!ls.getItem(term)){ ls.setItem(term, 'n/a');}
	return ls.getItem(term)
}

function fetchCoord(){
	return new Promise((resolve,reject) => {
		console.log('Fetching coordinates');
		const url = 'https://freegeoip.app/json/';
		try {
			fetch(url)
			.then(resp => {
				// console.log('first step');
				return resp.json()})
			.then(resp => {
				console.log('Grabbing coordinates');
				resolve([resp.latitude, resp.longitude,resp.city])})
		} catch(err){
			reject(err);
		}
	})
}
	
export {getLSTerm, fetchCoord}