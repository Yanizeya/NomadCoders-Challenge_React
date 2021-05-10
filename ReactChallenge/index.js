class ObjectUtilities {
    mergeObjects(objA, objB){
        return {...objA, ...objB};
    }

    removePassword(obj){
        let passObj = obj.password = "";
        return passObj;
    }
    freezeObj(obj){
        let freezeObj = Object.freeze(obj);
        return freezeObj;
    }
    getOnlyValues(obj){
        let arr = [];
        for(keyName in obj){
            arr += obj[keyName];
        }
        return arr;
    }
    getOnlyProperties(obj){
        let arr = [];
        for(keyName in obj){
            arr += keyName;
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
  