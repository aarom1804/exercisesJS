
let array = [];
let test = 0;
let arrayEmojis = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩", "🍻", "🥐"];


//-----------------------------------------------------------------------------
function random(){
    let asd = Math.round(Math.random() * 10);
    console.log(asd);
    test = asd;
    return test;
}

function updateOutput(){
    document.getElementById("resultEmoji").innerText = array;
}

//---------ADD-ITEM-------------------------------------------------------------------

function push(){
    array.push(arrayEmojis[random()]);
    updateOutput();
}

function unshift(){
    array.unshift(arrayEmojis[random()]);
    updateOutput();
}

function insert_At(element, index){
    array.splice(index, 0, arrayEmojis[element]);
    updateOutput();
}

//--------REMOVE-ITEM--------------------------------------------------------------------

function pop(){
    array.pop();
    updateOutput();
}

function shift(){
    array.shift();
    updateOutput();
}

function remove_At(element, index) {
    array.splice(index, 1);
    updateOutput();
  }

//---------------------------------------------------------------------------------------


/*
push();
push();
unshift();
insert_At(random(), 1);
*/
