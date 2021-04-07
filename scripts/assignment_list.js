const assign_list = document.querySelector('.assign_list');

// create elements and rendef events list
let inner_values = document.getElementsByClassName("inner_list");


function addlistListener(id) {
  document.getElementById(id)
      .addEventListener("click", function () {
          console.log(id + "was clicked!")
          //window.location.href="details.html";
          window.location.href = "event.html?event=" + id;
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
                addlistListener(id);
            })})}
            
//displayList();

function displayCard() {
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
                var duedate_firebase = doc.data().due_date.split("T");
                var duedate = "Due On: "+duedate_firebase[0]+ " Time: " + duedate_firebase[1]
                var link = doc.data().link

                let assign_list = document.querySelector(".assign_list")
                let card = document.createElement("div")
                let card_body = document.createElement('div')
                let card_title = document.createElement("h5")
                let card_subtitle = document.createElement("h6")
                let due_date = document.createElement("p")
                let url_link = document.createElement("a")
                let mark_as_complete_btn = document.createElement("button")
                let completion_image = document.createElement("img")

                card.setAttribute("class", "card")
                card_body.setAttribute("class", "card-body")
                card_body.setAttribute("id", id)
                card_title.setAttribute("class", "card-title")
                card_subtitle.setAttribute("class", "card-subtitle")
                due_date.setAttribute("class", "card-text")
                url_link.setAttribute("class", "card-link")
                url_link.setAttribute("href", link)
                mark_as_complete_btn.setAttribute("class", "mark-as-complete")
                completion_image.setAttribute("class", "completion-image")
                completion_image.setAttribute("placeholder", "Task Completed")
                completion_image.setAttribute("src", "./images/greentick.png")


                card_title.textContent = name
                card_subtitle.textContent = coursename
                due_date.textContent = duedate
                url_link.textContent = link
                mark_as_complete_btn.textContent = "Mark As Complete"

                assign_list.appendChild(card)
                card.appendChild(card_body)
                card_body.appendChild(card_title)
                card_body.appendChild(card_subtitle)
                card_body.appendChild(due_date)
                card_body.appendChild(url_link)
                card.appendChild(mark_as_complete_btn)
                card_body.appendChild(completion_image)
                addlistListener(id);
                
                let status = localStorage.getItem(id)
                if( status == "complete"){
                    completion_image.style.display = 'block'
                    mark_as_complete_btn.style.display = 'none'
                }
                else if (status !== "complete"){
                    completion_image.style.display = 'none'
                    mark_as_complete_btn.style.display = 'block'
                   // if(mark_as_complete_btn.click){
                       // console.log("button clicked")
                   // }
                }
                mark_as_complete_btn.addEventListener("click", function(event){
                    console.log("clicked")
                    localStorage.setItem(id, "complete");
                    location.reload();
                })
                
                //storage.setItem(id, 'complete');
                

                
                //let inner_list = document.createElement("li")
                //inner_list.setAttribute("id", id)
                //let value1 = document.createElement("ul")
                //let value2 = document.createElement("ul")
                //inner_list.textContent = duedate
                //value1.textContent = coursename
                //value2.textContent = name
                //inner_list.appendChild(value1)
                //inner_list.appendChild(value2)
                //assign_list.appendChild(inner_list)
                
            })})}


displayCard();









