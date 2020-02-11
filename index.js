document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => {
        document.querySelector(".text1lmao").textContent = "Getting Windows Ready"
        setTimeout(() => {
            document.querySelector(".text1lmao").textContent = "Look in the browser console"
            setTimeout(() => {
                document.querySelector(".text1lmao").textContent = "Come ONNNN"
                setTimeout(() => {
                    document.querySelector(".text1lmao").textContent = "Lo0k iN tHe BroWsEr C0nS0lE"
                }, 7000);
            }, 7000);
        }, 7000);
        
    }, 7000);

    let arrayTest = [
        {content: "1", id: 1},
        {content: 1, id: 2},
        {content: "hello", id: 3},
    ]

    setTimeout(() => {
        // Syntax error
        setTimeout(() => { console.error("Math.random( ;")  },1000);   
        // Type Error
        setTimeout(() => { const Bolean=true;Bolean.slice(33);},1000); 
        // Range Error
        setTimeout(() => { let range = "string".repeat(-1); }, 1000); 
        // URI Error 
        setTimeout(() => { let uri = decodeURIComponent('%'); },1000); 
        // Reference Error
        setTimeout(() => { const name = recidevName; }, 1000);         
    }, 200);

});