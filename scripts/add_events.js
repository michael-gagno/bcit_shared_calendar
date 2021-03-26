let submit = document.getElementById('submit_button');
submit.addEventListener('click', function(event){
    let name_of_assignment = document.querySelector('input[type = name]').value
    console.log(name_of_assignment)
    let course = document.querySelector('.combo_boxes select').value
    console.log(course)
    let set = document.getElementById('select_set').value
    console.log(set)
    let url = document.getElementById('url').value
    console.log(url)
    let date_time = document.getElementById('date_time_picker').value
    console.log(date_time)


    function add_events_to_database() {
        var events_values = db.collection("events");
        events_values.add({
            name: name_of_assignment,
            course_name: course,
            set_number: set,
            link: url,
            due_date: date_time
        });
    }
    add_events_to_database();



})

// It is a test comment