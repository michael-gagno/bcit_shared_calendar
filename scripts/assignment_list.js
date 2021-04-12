const assign_list = document.querySelector('.assign_list');

// create elements and rendef events list
let inner_values = document.getElementsByClassName("inner_list");
const set_value = localStorage.getItem("set")
console.log(set_value)


function addlistListener(id) {
  document.getElementById(id)
      .addEventListener("click", function () {
          console.log(id + "was clicked!")
          //window.location.href="details.html";
          window.location.href = "event.html?event=" + id;
      });
}

function displayCard() {
    db.collection("events")
    .where("set_number", "array-contains", set_value)
    .orderBy("due_date")
        .get() //READ asynch
        .then(function (snapcollection) {
            snapcollection.forEach(function (doc) {
                var id = doc.id;
                var name = doc.data().name;
                var coursename = doc.data().course_name;
                var duedate_firebase = doc.data().due_date.split("T");
                var duedate = "Due On: "+duedate_firebase[0]+ " Time: " + duedate_firebase[1]
                var link = doc.data().link
                let assign_list = document.querySelector(".assign_list")
                let card = document.createElement("div")
                let mark_as_complete_btn = document.createElement("img")
                let card_body = document.createElement('div')
                let card_title = document.createElement("h5")
                let card_subtitle = document.createElement("h6")
                let due_date = document.createElement("p")
                let url_link = document.createElement("a")
                let completion_image = document.createElement("img")
                let image_containers = document.createElement("div")
                let text_containers = document.createElement("div")

                card.setAttribute("class", "card")
                card_body.setAttribute("class", "card-body")
                card_body.setAttribute("id", "id"+id)
                card_title.setAttribute("class", "card-title")
                card_subtitle.setAttribute("class", "card-subtitle")
                due_date.setAttribute("class", "card-text")
                url_link.setAttribute("class", "card-link")
                url_link.setAttribute("href", link)
                image_containers.setAttribute("class", "image-containers")
                text_containers.setAttribute("id", id)
                mark_as_complete_btn.setAttribute("class", "mark-as-complete")
                completion_image.setAttribute("class", "completion-image")
                completion_image.setAttribute("placeholder", "Task Completed")
                completion_image.setAttribute("src", "./images/greentick.png")
                mark_as_complete_btn.setAttribute("src", "./images/mark_as_complete.jpg")


                card_title.textContent = name
                card_subtitle.textContent = coursename
                due_date.textContent = duedate
                url_link.textContent = link
                mark_as_complete_btn.textContent = "Mark As Complete"

                assign_list.appendChild(card)
                card.appendChild(card_body)
                card_body.appendChild(text_containers)
                text_containers.appendChild(card_title)
                text_containers.appendChild(card_subtitle)
                text_containers.appendChild(due_date)
                text_containers.appendChild(url_link)
                card_body.appendChild(image_containers)
                image_containers.appendChild(mark_as_complete_btn)
                image_containers.appendChild(completion_image)
                addlistListener(id);
                
                let status = localStorage.getItem(id)

                if( status == "complete"){
                    completion_image.style.display = 'block'
                    mark_as_complete_btn.style.display = 'none'
                }
                else if (status !== "complete"){
                    completion_image.style.display = 'none'
                }
                mark_as_complete_btn.addEventListener("click", function(event){
                    localStorage.setItem(id, "complete");
                    location.reload();
                })
                completion_image.addEventListener("click", function(event){
                    localStorage.setItem(id, "incomplete");
                    location.reload();
                })
                
            })})}



function check_due_date(){
        db.collection("events")
        .where("set_number", "array-contains", set_value)
        .orderBy("due_date")
            .get() //READ asynch
            .then(function (snapcollection) {
                snapcollection.forEach(function (doc) {
                    //console.log(doc.data())
                    //console.log(doc.data().name);
                    
                    var id = doc.id;
                    let due_card = document.getElementById("id"+id)

                    var duedate_firebase = doc.data().due_date;
                    console.log(duedate_firebase);
                    var cur_date = new Date();
                    var iso_cur_date = cur_date.toISOString();
                    console.log(iso_cur_date)
                    if (iso_cur_date > duedate_firebase){
                        console.log("The assignment has ended")
                        due_card.remove();
                    }
                    else{
                        return
                    }
                    
 
    

                    
                })})}
                
                
displayCard();
check_due_date();
window.setTimeout(function () {
    window.location.reload();
  }, 300000);












