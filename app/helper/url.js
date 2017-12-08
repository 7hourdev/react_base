export default function(url){
	if(url.indexOf("/") === 0){
		url = url.substring(1);
	}
	return process.env.URL+ url;
}
