//console.log("hello from javascript");
//Listen for form submit
document.querySelector("#myForm").
addEventListener("submit",saveBookMark);
function saveBookMark(e){
	//prevent form from submitting
	e.preventDefault();

	//console.log("save bookmark");
	var siteName = document.querySelector("#siteName").value;
	var siteUrl = document.querySelector("#siteUrl").value;
    var bookmark = {
    	name:siteName,
    	url:siteUrl
    };
    if(bookmark.name=="" || bookmark.url==""){
    	alert("Please fill in the form");
    	return false;
    }


	//console.log(siteName);
	//test local Storage
	//localStorage.setItem("test","Hello World");
	//console.log (localStorage.getItem("test"));
//check ifthe bookmarks array exist
if(localStorage.getItem('bookmarks') ===null){
	// init array
	var bookmarks = [];
	//add bookmarker to array
	bookmarks.push(bookmark);
	//set to localStorage
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
}else{
	//get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem ("bookmarks"));
//add new bookmark into bookmarks
bookmarks.push(bookmark);
//reset bookmarks back to localStorage
localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
 }

//reset form
	 document.querySelector("#myForm").reset();
	 //prevent form from submitting
	 //fetch the bookmark
	 fetchBookmarks();
}
function fetchBookmarks(){
	//get bookMarks from localStorage

var bookmarks = JSON.parse(localStorage.getItem ("bookmarks"));
//get the output id
var bookmarksResult = document.querySelector("#bookmarksResult");

//build output
bookmarksResult.innerHTML = "";

for(var i = 0;i<bookmarks.length;i++){
	var name = bookmarks[i].name;
	var url = bookmarks[i].url;
	bookmarksResult.innerHTML +=
	"<div><h3>" + name +" "+
	'<a class="btn btn-success" href=' + url+ '>Visit</a>'+
	'<a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\')"href="#">Delete</a>'+
    '</h3>'+
    '</div>'
 }
 console.log()
}
function deleteBookmark(url){
	//test if the function is called
	//console.log("hello from deleteBookmark");
	//get bookmarks from localStorage

var bookmarks = JSON.parse(localStorage.getItem ("bookmarks"));
//get the output id
var bookmarksResult = document.querySelector("#bookmarksResult");

//loop through bookmarks

for(var i = 0;i<bookmarks.length;i++){
	if(bookmarks[i].url==url){
		//Remove bookmark from bookmarks array]
		bookmarks.splice(i,1);
		break;
	 }
	}
	//Rest bookmarks back to localStorage
	localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

	//Re-fetch bookmarksresults
	fetchBookmarks();
}