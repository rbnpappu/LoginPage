import { resourceLimits } from "worker_threads";

//Bussiness Code For logic
export function validateInfo(username:string,password:string) {
    let errors = {
        username: "",
        password: ""
    };


    let forcheckingtheuppercase = /[A-Z]/;
    let forcheckingthelowercase = /[a-z]/;
    let usernameRegex =   /^[a-zA-Z]([.](?![.])|[a-zA-Z]){3,10}[a-zA-Z]$/
    let forcheckingnumber = /\d/;
    let forcheckspecialsymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


    if(username==="") {
        errors.username = 'Please write the username';
        return errors;
    }


    if((password==="")) {
        errors.password = 'Please write the password';
        return errors;
    }
    
    if((username.length<3)) {
        errors.username = 'Username min characters is 3';
        return errors;
    }
    
    if((username.length>10)) {
        errors.username = 'Username max characters is 10';
        return errors;
    }

    if(!(usernameRegex.test(username))) {
        errors.username = 'It is not a correct syntax of username . Correct syntax is :abc.de';
        return errors;
    }
    
    if((password.length<8)) {
        errors.password = 'Password min characters is 8';
        return errors;
    }


    if((password.length>16)) {
        errors.password = 'Password max characters is 16';
        return errors;
    }


    if (!(forcheckingtheuppercase.test(password))) {
        errors.password = 'Password must be written by using uppercase';
        return errors;
    }


    if (!(forcheckingnumber.test(password))) {
        errors.password = 'Password must be contains numbers';
        return errors;
    }
    
    
    if (!(forcheckspecialsymbol.test(password))) {
        errors.password = 'Password must be contains specialsymbols';
        return errors;
    }
    
    
    if (!(forcheckingthelowercase.test(password))) {
        errors.password = 'Password must be contains lowercase charactos';
        return errors;
    }


    errors.username = "valid";
    errors.password = "valid";
    return errors;
}


//Bussiness Code For Test Cases









