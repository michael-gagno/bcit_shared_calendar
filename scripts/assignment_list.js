const assign_list = document.querySelector('.assign_list');

// create elements and rendef events list

function renderEvent(doc){
  let li = document.createElement('li');
  let data_list = document.createElement('ul')
  data_list.setAttribute('class', 'data_list')

  let due_date = document.createElement('div');
  let course_name = document.createElement('div');
  let assignment_name = document.createElement('div');
  let link = document.createElement('div');
  let set = document.createElement('div');
  
  li.setAttribute('data-id', doc.id);
  course_name.textContent = 'Name : '+ doc.data().course_name + '\n';
  assignment_name.textContent ='Assignment name : ' + doc.data().name + '\n';
  link.textContent = 'Link : '+ doc.data().link + '\n';
  set.textContent = 'Set : '+ doc.data().set_number + '\n';
  
  li.textContent = 'Due-Date : '+ doc.data().due_date + '\n';
  data_list.appendChild(due_date);
  data_list.appendChild(course_name);
  data_list.appendChild(assignment_name);
  data_list.appendChild(link);
  data_list.appendChild(set);
  li.appendChild(data_list)
  assign_list.appendChild(li);
  
}



//db.collection('events').orderBy('due_date').get().then((snapshot) => {
  //snapshot.docs.forEach(doc => {
    //renderEvent(doc);
  //});
//})


// create elements and rendef events list
let inner_values = document.getElementsByClassName("inner_list");

function displayList() {
    db.collection("events")
    .orderBy("due_date")
        .get() //READ asynch
        .then(function (snapcollection) {
            snapcollection.forEach(function (doc) {
                console.log(doc.data())
                console.log(doc.data().name);
                var id = doc.id;
                var name = doc.data().name;
                var coursename = doc.data().course_name;
                var duedate = doc.data().due_date;

                let assign_list = document.querySelector(".assign_list")
                let inner_list = document.createElement("li")
                inner_list.setAttribute("id", id)
                let value1 = document.createElement("ul")
                let value2 = document.createElement("ul")
                inner_list.textContent = duedate
                value1.textContent = coursename
                value2.textContent = name
                inner_list.appendChild(value1)
                inner_list.appendChild(value2)
                assign_list.appendChild(inner_list)
                
                

                //$(".assign_list").append("<ol id=" + id + ">" + course_name + "</ol>")
                //$(".inner_list").append("<ol id=" + id + ">" + name + "</ol>")
                
                addlistListener(id);
            })})}
            
displayList();


function addlistListener(id) {
    document.getElementById(id)
        .addEventListener("click", function () {
            console.log(id + "was clicked!")
            //window.location.href="details.html";
            window.location.href = "event.html?event=" + id;
        });
}







