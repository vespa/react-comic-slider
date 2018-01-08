
const URLManager = ((window, location) =>{
    const obj = {};
    const data = ()=>{
        return {
            currentURL: "/"
        }
    };
    const getAndSetter = (obj)=>{
        return {
            "get": (name)=>{
                return obj[name];
            },
             "set": (name, value)=>{
                obj[name] = value;
                return obj;
            },
        }
    }

    const checkCurrentURL = (obj) =>{
        return {
            "checkCurrentURL" : ()=>{ 
                obj.set("currentURL", location.pathname);
                return URLManager;
            }
        }
    };

    const callURL = (obj) =>{
        return {
            "callURL" : ({title, url})=>{
                window.history.pushState({"html":"","pageTitle":title},"", url);
                return obj;
            }
        }
    };
   
    return Object.assign(obj, 
            callURL(obj),
            checkCurrentURL(obj),
            getAndSetter(obj),
            data()
        );
})(window, location);

export default URLManager;