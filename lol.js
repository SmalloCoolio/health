    // Remove button
    var remove = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < remove.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        remove[i].appendChild(span);
    }
 
    // Hide li when click button
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
            div.style.display = "none";
        }
    }
 
    // Click to check
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
        }
    }, false);
 
    // Onclick
    function onAdd() {
        
    // node li
    var li = document.createElement("li");

    // User's data
    var DuLieu = document.getElementById("Input").value;

    // Create text node
    var t = document.createTextNode(DuLieu);
    
    // Tag the node
    li.appendChild(t);

    // If else
    if (DuLieu === '') {
        alert("You must write something!");
    } else {
        document.getElementById("toDo").appendChild(li);
    }

    // Delete input
    document.getElementById("Input").value = "";
    
    // Remove button for li
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
    }