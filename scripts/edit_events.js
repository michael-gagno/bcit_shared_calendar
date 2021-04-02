
let url = window.location.search
let urlParams = new URLSearchParams(url)
let id = urlParams.get('id')
console.log(id)
let delete_btn = document.getElementById("Delete_button");
delete_btn.addEventListener("click", function(event){
    db.collection("events").doc(id).delete().then(() => {
        console.log("doc Deleted !")
        alert("Assignment Deleted Successfully!")
    }).catch((error) => ("Error removing doc", error));
});