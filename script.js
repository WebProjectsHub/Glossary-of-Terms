//*---Search Script-------------------------------*/
var UL = document.getElementById("terminologies");

UL.style.display = "none";				/*---Hide the list by default---*/
var searchBox = document.getElementById("termsearch");
function searchfunc() 					/*---Search function	--------*/
{
	var input, filter, ul, li, a, i;
	input = document.getElementById("termsearch");
	ul = document.getElementById("terminologies");
	filter = input.value.toUpperCase();

	/*---if the input is empty hide the list------------*/
	if
	(filter.trim().length < 1) 
		{
		ul.style.display = "none";
 		return false;
		} 
		else 
			{
        		ul.style.display = "block";
    			}
    
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) 
	{
	a = li[i].getElementsByTagName("a")[0];
        
	if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
		{ 
                a.innerHTML = a.innerHTML.replace(new RegExp(filter,"gi"), function(match){
                    return "<mark>" + match + "</mark>";
                });
		li[i].style.display = "";
		}
	else
			{
			li[i].style.display = "none";
			a.innerHTML = a.innerHTML.replace(/<mark>|<\/mark>/gi, "");
			}
	
    }
}
//*---END Search Script---------------------------*/

//*---Copy Script---------------------------------*/
function engFunction() //copy english text
{
    var range = document.createRange();
    var element = document.getElementById("eng");

    // Ignore div with id 'related'
    var relatedDiv = document.getElementById("related");
    if (relatedDiv) {
        element.removeChild(relatedDiv);
    }

    // Ignore div with id 'relatedList'
    var relatedListDiv = document.getElementById("relatedList");
    if (relatedListDiv) {
        element.removeChild(relatedListDiv);
    }

    range.selectNode(element);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect

    // Reload the page
    location.reload();
}



	function AraFunction()		//copy arabic text
	{
		var range = document.createRange();
		range.selectNode(document.getElementById("Ara"));
		window.getSelection().removeAllRanges(); 		// clear current selection
		window.getSelection().addRange(range); 			// to select text
		document.execCommand("copy");
		window.getSelection().removeAllRanges();		// to deselect
	}

//*---END Copy Script-----------------------------*/

