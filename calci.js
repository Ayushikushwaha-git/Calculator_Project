
 let res=document.getElementById("text")
 
let display=(str)=>{
  
  res.value+=str
  

}
let clearall=()=>{
    res.value="";
  
  }
  let solve=()=>{
    try{
          
    var p=res.value;
    
    var q=eval(p);
    res.value=q;}
    catch(e){
res.value="Error.."
    }

  }
  let absolute=()=>{
    let y=res.value
    res.value=y-(y*2)
  }
 
 
  