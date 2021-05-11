
class ObjectUtilities {
    
    static mergeObjects(objA, objB){
        return {...objA, ...objB};
    }

    static removePassword(obj){
        let {password, ...rest} = obj;
        return rest;
    }
    
    static freezeObj(obj){
        'use strict';
        let freezeObj = Object.freeze(obj);
        return freezeObj;
    }

    static getOnlyValues(obj){
        let arr = [];
        for(let keyName in obj){
            arr = [...arr,obj[keyName]];
        }
        return arr;
    }

    static getOnlyProperties(obj){
        let arr = [];
        for(let keyName in obj){
            arr = [...arr,keyName];
        }
        return arr;
    }
}

  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  