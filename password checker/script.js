let input=document.getElementById('pass');
let btn=document.getElementById("mybutton");
function myfunction(){
  //  console.log(input.value)
    let val = input.value;
    let size=val.length
    let myArr=val.split("");
    //console.log(typeof(myArr))
    for(let i=0;i<size;i++){
        if (size>=6){
            if(myArr[i]>=0 && myArr[i]<=9){
                 if(myArr[i]=='#'||myArr[i]=='$'||myArr[i]=='%'||myArr[i]=='@'){
                    console.log("strong");
                 }
            }
            
            else if(myArr[i]=='#'||myArr[i]=='$'||myArr[i]=='%'||myArr[i]=='@'){
                console.log("medium");
            }
            else if(myArr[i]>=0 && myArr[i]<=9){
                console.log("medium");
            }
            else{
                console.log('weak')
            }

        }
        
    else{
         console.log("give at least 6 character");
    }
    }
}

btn.addEventListener('click',myfunction);

