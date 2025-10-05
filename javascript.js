let schedule=JSON.parse(localStorage.getItem("schedule")) || {};

function saveSchedule(){
    localStorage.setItem("schedule",JSON.stringify(schedule));
}

function renderSchedule(){
    let container =document.getElementById("schedule");
    container.innerHTML="<h3>Your Schedule: </h3>";
    let times=Object.keys(schedule).sort();
    times.forEach(time=>{
        container.innerHTML +=`
            <div class="task">
                <span class="time">${time}</span> ${schedule[time]}
                <button onclick="deleteTask('${time}')">❌</button>
            </div> `;  
    })
}




function addTask(){
    let time=document.getElementById("time").value;
    let task=document.getElementById("task").value;
    if (time&&task){
        schedule[time]=task;
        saveSchedule();
        renderSchedule();
        document.getElementById("time").value="";
        document.getElementById("task").value="";        
    }
}

function deleteTask(time){
    delete schedule[time];
    saveSchedule();
    renderSchedule();
}



renderSchedule();
