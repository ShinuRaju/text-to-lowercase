const select = (el:string, all:boolean = false) => {
    
    el = el.trim();
    let element:any;


    if (all) {
      element = Array.from (document.querySelectorAll(el))  
    } else {
        element = document.querySelector(el)
    }

    if (element === null || element === undefined || element.length === 0) {
        console.log('no selection occured')
    } else {
        return element
    }

}

let inputText : HTMLTextAreaElement =  select ('#inputText');
let outputText : HTMLTextAreaElement = select ('#OutputText');

let inputChangeFunction = () => {
    let lowerCaseVal = inputText.value.toLowerCase();
    outputText.value = lowerCaseVal;
}

inputText.addEventListener('input', () => {
    inputChangeFunction() ;


})