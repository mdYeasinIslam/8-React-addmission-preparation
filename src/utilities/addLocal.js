const addLocal=(time)=>{
    let setObject={};
   
   
    let quantity=setObject[time];
    if(quantity){
        setObject[time]=quantity;
    }
    else{
        setObject[time]=1;
    }
 localStorage.setItem('time',JSON.stringify(setObject))
 
 }
 const displayLocal= () =>{
    let setObject={};
    const getObject=localStorage.getItem('time')
    if(getObject){
        setObject = JSON.parse(getObject)
    }
    // console.log(setObject)
    return setObject;
 }

export { 
    addLocal,
    displayLocal }