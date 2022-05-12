import { validateInfo } from "./validation";
import React from"react";

interface Check { 
     username:string,
     password:string
   };
   
   var checkedvaliddata:Check = { 
     username: "valid",
     password: "valid"
   }   

test('check valid username and password', () => {
      expect(validateInfo("Pappu.th","Asda@123")).toStrictEqual(checkedvaliddata);
}
);

var checkedusernamesyntax:Check = { 
      username: "It is not a correct syntax of username . Correct syntax is :abc.de",
      password: ""
    }   
test('check syntax of username', () => {
      expect(validateInfo("@@@@","asda@12")).toStrictEqual(checkedusernamesyntax);
      }
      );

var checkedusernameminlength:Check = { 
            username: "Username min characters is 3",
            password: ""
          }     
      
test('Length of username greater than or equal to 3', () => {
        expect(validateInfo("P.","1@Asdfgh")).toStrictEqual(checkedusernameminlength);
        }
        );
        var checkedusernamemaxlength:Check = { 
            username: "Username max characters is 10",
            password: ""
          }        
test('Length of username less than or equal to 10', () => {
            expect(validateInfo("Pappu.thakur","1@Asdfgh")).toStrictEqual(checkedusernamemaxlength)
            }
            );
            var checkedpasswordminlength:Check = { 
                  username: "",
                  password: "Password min characters is 8"
                }  
test('Length of password greater or equal to 8', () => {
                expect(validateInfo("Pappu.th","1@aA")).toStrictEqual(checkedpasswordminlength);
                }
                );
var checkedpasswordmaxlength:Check = { 
                  username: "",
                  password: "Password max characters is 16"
                }  
test('Length of password less or equal to 16', () => {
                    expect(validateInfo("Pappu.th","1@Aasdfghjklmnopq")).toStrictEqual(checkedpasswordmaxlength)
                    }
                    );

                    var checkedpasswordcontainsnumber:Check = { 
                        username: "",
                        password: "Password must be contains numbers"
                      }                     
test('Password must be contain atleast one integer', () => {
                        expect(validateInfo("Pappu.th","@aAcdegh")).toStrictEqual(checkedpasswordcontainsnumber);
                        }
                        );
                        var checkedpasswordcontainsspecialsymbol:Check = { 
                              username: "",
                              password: "Password must be contains specialsymbols"
                            }   

test('Password must be contain atleast one special special symbol', () => {
                            expect(validateInfo("Pappu.th","1Abcdegh")).toStrictEqual(checkedpasswordcontainsspecialsymbol);
                            }
                            );
                            var checkedpasswordcontainsuppercase:Check = { 
                              username: "",
                              password: "Password must be written by using uppercase"
                            } 

test('Password must be contain atleast one Uppercase Charactors', () => {
                            expect(validateInfo("Pappu.th","1@bcdegh")).toStrictEqual(checkedpasswordcontainsuppercase);
                            }
                            );    
                            var checkedpasswordcontainslowercase:Check = { 
                              username: "",
                              password: "Password must be contains lowercase charactos"
                            }
                            
 test('Password must be contain atleast one Lowercase Charactors', () => {
                              expect(validateInfo("Pappu.th","1@ABCDEFGHK")).toStrictEqual(checkedpasswordcontainslowercase);
                              }
                              );    
  



            


