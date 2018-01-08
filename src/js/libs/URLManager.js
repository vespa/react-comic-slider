
const URLManager = ((window, location) =>{
    const obj = {};
    window.addEventListener('popstate', (e)=>{
        e.preventDefault();
        obj.executeOnPopstate.map(item =>{
            item();
        });
    });

    const data = ()=>{
        return {
            currentURL: "/",
            executeOnPopstate: []
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
            "onpopstate" : (func)=>{
                if(func.constructor !== Function) throw Error('cannot add a non-function to \"onpopstate\" ')
                obj.executeOnPopstate.push(func);
            }
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
            "callURL" : ({title, slug})=>{
                window.history.pushState({"html":"","pageTitle":title}, title, slug);
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