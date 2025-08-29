//fnc statement
function abcd(){
    console.log('ggk');
}
abcd();

//fnc expression
let character = function (){
    console.log('it is generated');
};
character();


//iife(Imediately Invoked Function Expression)
let res = (function(){
    return console.log('created and destroyed!!');
});
res();