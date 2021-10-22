//////////////////      save reference to important DOM elements    ////////////////

var timeDisplayEl = $('#time-display');


////////////////////     handle displaying the time      /////////////////////////////

function displayTime() {
  let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);

  
}

//////////////////// compare time slots to current time /////////////////////

function checkTask(event){


  let rightNow = moment().format('H');
  

  for(let i = 9; i <= 17;i++){

    if(i< rightNow){

      document.getElementById(`i${i}`).style.backgroundColor = "#D3D3D3";

    }
    else if(i == rightNow){

      document.getElementById(`i${i}`).style.backgroundColor = "#ff5454";

    }else{

      document.getElementById(`i${i}`).style.backgroundColor = "#90EE90";

    }

  }

}

/////////////// Add event listener to generate button///////////////////////////////////////
  
  const holder = document.body;

  holder.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    setTask(event.target.id)


  })
  
/////////////// assign input to local storage /////////////////////////////////////

function setTask(e){
  
  let bagInput = document.getElementById(`i${e}`).value;
  
  let tasks = {

    timeSlot:`i${e}`,
    inputStored: bagInput,

  }
  window.localStorage.setItem(`${e}`,JSON.stringify(tasks));


}

////////////////////// Inject local storage to assigned elements /////////////////////////

function getTask(){

  for(i=0;i<localStorage.length;i++){
    
    let key = localStorage.key(i);

    let tasks = JSON.parse(window.localStorage.getItem(key));
    console.log(key);
    document.getElementById(tasks.timeSlot).value = tasks.inputStored;

  }
}

///////////////////////////// Run functions   //////////////////////////////////

setInterval(displayTime, 1000);
setInterval(checkTask,1000);
window.onload = getTask();