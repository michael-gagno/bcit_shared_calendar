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



db.collection('events').orderBy('due_date').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    //renderEvent(doc);

  });

})






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
                $(".assign_list").append("<ol id=" + id + ">" + name + "</ol>")
                addlistListener(id);
            })
        })
}
displayList();


function addlistListener(id) {
    document.getElementById(id)
        .addEventListener("click", function () {
            console.log(id + "was clicked!")
            //window.location.href="details.html";
            window.location.href = "edit_event.html?id=" + id;
        });
}
