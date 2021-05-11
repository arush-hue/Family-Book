var members=["Karan Sharma-Father","Anisha Sharma-Mother","Arush Sharma-Me","Rakesh Kumar Sharma-Paternal Grandad","Tapodhani Sharma-Paternal Grandmother","Swetha Sharma-Aunt","Krisha Sharma-Cousin Sister","Vijay Kumar Anand-Maternal Grandfather","Sharda Anand-Maternal Grandmother",];
var images=["Karan.png","Anisha.jpeg","My pic copy.png","Rakesh.png","Tapodhani.jpeg","Cheena.png","Krisha.png","MG.png","MG copy.png"]
var i=0;
function nextMember()
{
    document.getElementById("firstH5").innerHTML=members[i];
    document.getElementById("firstImage").src=images[i];
    i++;
    if(i>8)
    {
        i=0;
    }
}