document.getElementById("submit_event").addEventListener("click", function addEvent() {
    var calendar_event = db.collection("event")
    calendar_event.add({
        name: document.getElementbyId("event_name"),
        class: document.getElementbyID("select_course"),
        set: document.getElementById("select_set"),
        link: document.getElementById("url"),
        due_date: document.getElementById("date_time_picker"),
    })
})