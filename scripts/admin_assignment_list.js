const assign_list = document.querySelector('.assign_list');

// create elements and rendef events list
let inner_values = document.getElementsByClassName("inner_list");


function addlistListener(id) {

  document.getElementById(id)
      .addEventListener("click", function () {
          console.log(id + "was clicked!")
          //window.location.href="details.html";
          window.location.href = "edit_event.html?id=" + id;

      });
}


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
                
                let inner_container = document.createElement("div")
                let assign_list = document.querySelector(".assign_list")
                let inner_list = document.createElement("li")
                let value1 = document.createElement("ul")
                let value2 = document.createElement("ul")

                inner_list.setAttribute("id", id)
                inner_container.setAttribute("class", "inner_container")

                inner_list.textContent = duedate
                value1.textContent = coursename
                value2.textContent = name

                inner_list.appendChild(value1)
                inner_list.appendChild(value2)
                inner_container.appendChild(inner_list)
                assign_list.appendChild(inner_container)

                addlistListener(id);
            })})}
            
displayList();










