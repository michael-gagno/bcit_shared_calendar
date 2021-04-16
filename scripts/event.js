let params = (new URL(document.location)).searchParams;
let eventId = params.get("event");
let storage = window.localStorage;


function showEventDetails(eventId) {
    if (!eventId) { eventId = "none" };
    let eventInfo = db.collection("events").doc(eventId);
    eventInfo.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            let eventNameCourse = document.getElementById("event-name-course");
            let eventName = document.getElementById("event-name");
            let eventDescription = document.getElementById("event-description");
            let eventDueDate = document.getElementById("event-due");
            let eventLinks = document.getElementById("event-links");
            let eventAnchor = document.getElementById("event-url");

            let courseNameText = document.createTextNode(doc.data().course_name);
            eventNameCourse.appendChild(courseNameText);

            let eventNameText = document.createTextNode(doc.data().name);
            eventName.appendChild(eventNameText);

            let eventDescriptionText = document.createTextNode(doc.data().description);
            eventDescription.appendChild(eventDescriptionText);

            let eventDueDateText = document.createTextNode(doc.data().due_date);
            eventDueDate.appendChild(eventDueDateText);

            let eventLinksText = document.createTextNode(doc.data().link);
            eventLinks.appendChild(eventLinksText);
            eventAnchor.href = doc.data().link;

            let btnComplete = document.getElementById('event-set-complete');
            let btnIncomplete = document.getElementById('event-set-incomplete');
            let completionText = document.getElementById('event-completed');

            if (storage.getItem(eventId)) {
                btnComplete.style.display = 'none';
                btnIncomplete.style.display = 'block';
                completionText.style.display = 'inline';
            }

            btnComplete.addEventListener('click', function (event) {
                storage.setItem(eventId, 'complete');
                btnComplete.style.display = 'none';
                btnIncomplete.style.display = 'block';
                completionText.style.display = 'inline';
            });
            btnIncomplete.addEventListener('click', function (event) {
                storage.removeItem(eventId);
                btnComplete.style.display = 'block';
                btnIncomplete.style.display = 'none';
                completionText.style.display = 'none';
            });

            document.getElementById('event-container').style.display = 'block';
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

showEventDetails(eventId);


