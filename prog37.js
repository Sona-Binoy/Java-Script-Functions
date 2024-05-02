//call back functions

function greet(name,callback){
    console.log(`hii ${name}`);
    callback()
}

function callme(){
    console.log('Iam a callback function');
}

greet('peter',callme)


//eg of predefined and also  callback function

setTimeout(()=>{
    console.log('Hiiiiiiiiiii');
},5000)