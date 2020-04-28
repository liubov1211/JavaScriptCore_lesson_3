//task 1
let ab = prompt('Введи число');
if (ab > 0) {
    console.log('1');
} else if (ab < 0) {
    console.log('-1');
} else {
    console.log('0');
}

//task 2 
let login = prompt ('Who is there?');

if (login == 'Admin'){
    let password = prompt('Password?');
    if(password == null){
        console.log('Canceled.');
    }else if(password == 'TheMaster'){
       console.log('Welcome!');
    }else{
        console.log('Wrong password');
    }
}else if (login == null){
    console.log('Canceled.');
}else{
    console.log('I dont know');
}


//task 3
switch(login) {
        case 'Admin':{
            let password = prompt('Password?');
            switch(password){
                case 'TheMaster':{
                    console.log('Welcome!');
                    break;
                }
                case null:{
                    console.log('Canceled');
                    break;
                }
                default:{
                    console.log('Wrong Password');
                }
            }
            break;
        }
        case null:{
            console.log('Canceled');
            break;
        }
        default:{
            console.log('I dont know');
        }
            
    }