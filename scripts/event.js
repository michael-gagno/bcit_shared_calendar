let params = (new URL(document.location)).searchParams;
let eventId = params.get("event");

function showEventDetails(eventId) {
    let event = db.collection("events").doc(eventId);
    event.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

showEventDetails(eventId);


