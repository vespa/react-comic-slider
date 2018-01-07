
const URLManager = ((window) =>{
    const callNewUrl = ()=>{
       window.history.pushState({"html":"","pageTitle":"testaaando"},"", "/teste");
    }
    // not on pushState
    window.addEventListener("popstate", function(){
        console.log("mudou")
    })

    return {
        callURL: callNewUrl
    }
})(window);

export default URLManager;