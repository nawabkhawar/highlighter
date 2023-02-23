//old

//fetch ids of books
//class id for every book title form main page a-row.kp-notebook-library-each-book
var ids = new Array();
$('.a-row.kp-notebook-library-each-book').each(function() {
currentid= $(this).attr("id"); //Get elements that have an id=
  ids.push(currentid);console.log(currentid); //add id to array
});
latestId=ids[1];
fetch('https://read.amazon.com/notebook?asin='+ latestId + '&contentLimitState=&').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
	console.log(html);
	console.log(doc);

	  //id = doc.getElementsById("annotationNoteHeader")[0];
	  //console.log(id);

console.log("hi now we will parse html");
console.log($(html).find("#annotationNoteHeader").text());
console.log("lets parse highlights");
console.log($(html).find("#highlight").text());



}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

//call amazon and get all highlights
//https://read.amazon.com/notebook?asin=B01N5AX61W&contentLimitState=&

//call - https://read.amazon.com/notebook?asin=(this).attr("id")&contentLimitState=&

//const res = await fetch('https://read.amazon.com/notebook?asin=(this).attr("id")&contentLimitState=&');
//console.log(res);
//data = await res.text;
//console.log(data);





//important data
//on ---> https://read.amazon.com/notebook?asin=(this).attr("id")&contentLimitState=&
//id of h3 class to get book name -> a-spacing-top-small a-color-base kp-notebook-selectable kp-notebook-metadata


///highlight data

//<span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable 
//kp-notebook-metadata">Note | Location:&nbsp;150</span>