
let url = window.location.search
let urlParams = new URLSearchParams(url)
let id = urlParams.get('id')

let delete_btn = document.getElementById("Delete_button");
delete_btn.addEventListener("click", function(event){
    db.collection("events").doc(id).delete().then(() => {
        console.log("doc Deleted !")
        alert("Assignment Deleted Successfully!")
        window.location.href="admin_assignment_list.html"
    }).catch((error) => ("Error removing doc", error));
});

var docRef = db.collection("events").doc(id);

docRef.get().then((doc) => {
    if (doc.exists) {
        let name_field = document.getElementById("name_of_assignment")
        name_field.setAttribute("value", doc.data().name)
        set_dropdown(doc.data().course_name)
        set_checkbox(doc.data().set_number)
        let url = document.getElementById("url")
        url.textContent = doc.data().link
        let description = document.getElementById("desc")
        description.textContent = doc.data().description
        let date_time = document.getElementById("date_time_picker")
        date_time.setAttribute("value", doc.data().due_date)

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

function set_dropdown(course_name){
    let course = document.getElementById("select_course")
    if (course_name == "COMP 1510"){
        course.selectedIndex = "0";
    }
    else if(course_name == "COMP 2510"){
        course.selectedIndex = "1";
    }
    else if(course_name == "COMP 2456"){
        course.selectedIndex = "2";
    }
}

function set_checkbox(selected_array){
    if (selected_array.includes("A")){
        document.getElementById("inlineCheckbox1").checked = true;
    }
    if (selected_array.includes("B")){
        document.getElementById("inlineCheckbox2").checked = true;
    }
    if (selected_array.includes("C")){
        document.getElementById("inlineCheckbox3").checked = true;
    }
    if (selected_array.includes("D")){
        document.getElementById("inlineCheckbox4").checked = true;
    }
    if (selected_array.includes("E")){
        document.getElementById("inlineCheckbox5").checked = true;
    }
    if (selected_array.includes("F")){
        document.getElementById("inlineCheckbox6").checked = true;
    }
    }


let edit_btn = document.getElementById("Edit_button");
edit_btn.addEventListener("click", function(event){
    let name_of_assignment = document.querySelector('input[type = name]').value
    console.log(name_of_assignment)
    let course = document.querySelector('.combo_boxes select').value
    console.log(course)
    let set = get_checkboxes();
    console.log(set)
    let url = document.getElementById('url').value
    console.log(url)
    let date_time = document.getElementById('date_time_picker').value
    console.log(date_time)
    let desc = document.getElementById("desc").value
    db.collection("events").doc(id).update({
        name: name_of_assignment,
        course_name: course,
        set_number: set,
        link: url,
        due_date: date_time,
        description: desc
    }).then(() =>{
        alert("Document updated successfully");
        window.location.href="admin_assignment_list.html";

    })
    
})


function get_checkboxes(){
    let values = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        values.push(checkboxes[i].value)
        
      }
      return values

}
