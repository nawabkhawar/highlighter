$(document).ready(function(){
loadCharacters();
});


        const loadCharacters = async () => {
            try {
               //const res = await fetch('http://nawabkhawar.in:8080/nawab-clubs-1/nawabClubSearch/getAllClubsCached');
                //data = await res.json();
                const res = await fetch('./examplehighlights.html');
                data = await res.html;
                
                fetch('./examplehighlights.html').then(function (response) {
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

locations = new Array();
highlights = new Array();

$(html).find("#annotationNoteHeader").each(function(id,el){
    console.log("hiiii");
    console.log(el);
    console.log($(el).text());
    locations.push(($(el).text()).split('|')[1]);
});

$(html).find("#highlight").each(function(id,el){
    console.log("hiiii");
    console.log(el);
    console.log($(el).text());
    
    highlights.push($(el).text());
});

$(locations).each(function(id){
    console.log(locations[id]);    
console.log(highlights[id]);
});


//console.log("lets parse highlights");
//console.log($(html).find("#highlight").text());





}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

                
                
                console.log("data is ");
                console.log(data);
                        console.log("data is ");
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };