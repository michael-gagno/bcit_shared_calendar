let submit = document.getElementById('submit_button');
submit.addEventListener('click', function(event){
    let name_of_assignment = document.querySelector('input[type = name]').value
    let course = document.querySelector('.combo_boxes select').value
    let set = get_checkboxes();
    let url = document.getElementById('url').value
    let date_time = document.getElementById('date_time_picker').value
    let desc = document.getElementById("desc").value


    function add_events_to_database() {
        var events_values = db.collection("events");
        events_values.add({
            name: name_of_assignment,
            course_name: course,
            set_number: set,
            link: url,
            due_date: date_time,
            description: desc
        });
    }
    try{
        add_events_to_database();
        alert("Assignment Uploaded")
        window.location.href = "./admin.html"
    }
    catch{
        alert("Please fill all the fields in order to upload the assignment!")
    
    }


})


function get_checkboxes(){
    let values = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        values.push(checkboxes[i].value)
      }
    if (values.length == 0){
        return
    }
    else{
        return values
    }

}


// It is a test comment