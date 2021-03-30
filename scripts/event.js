let params = (new URL(document.location)).searchParams;
let eventId = params.get("event");

function showEventDetails(eventId) {
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
            eventAnchor.href = doc.data().link
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

showEventDetails(eventId);


