let save_set_btn = document.getElementById("save-set");
save_set_btn.addEventListener('click', function (event) {
    set_value = get_value_from_radio_btn();
    if (set_value == null) {
        localStorage.setItem("set", "A");
    }
    else {
        localStorage.setItem("set", set_value);
        alert("Your set is now changed to " + localStorage.getItem("set"));
        window.location.href = "assignment_list.html";
    }
});


function get_value_from_radio_btn() {
    var radio = document.querySelectorAll('input[type=radio]:checked');
    for (var i = 0; i < radio.length; i++) {
        value = (radio[i].value);
    }
    return value;
}

radio_btn_value = localStorage.getItem("set");
document.getElementById(radio_btn_value).checked = true;
