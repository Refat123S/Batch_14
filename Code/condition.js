function condition(){
    const data=5;
    if(data%2==0)
    {
        console.log(data + " is even");
    }
    else{
         console.log(`${data} is odd`);
    }
}
condition();
function condition1(){
    const data=5;
      const data_a=6;
        const data_b="6";
    if(data==data_a)
    {
        console.log("data is equal");
    }
    else if(data_a===data_b){
         console.log("data is equal");//we use this === whwn we want to know the data type and the value are same
    }
    else{ 
        console.log("nothing");
    }
}
condition1();