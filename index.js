let id1,id2,id3,id4,id5,id6,id7,id8,id9 ;
id1= document.getElementById("id1");
id2= document.getElementById("id2");
id3= document.getElementById("id3");
id4= document.getElementById("id4");
id5= document.getElementById("id5");
id6= document.getElementById("id6");
id7= document.getElementById("id7");
id8= document.getElementById("id8");
id9= document.getElementById("id9");

// functions to print X or O
let flag=1;
function PrintLiveResult1(){
    if(flag==1){   
        id1.value= "X" ;
        id1.disabled= true;
        flag=0;
    }
    else{
        id1.value= "0";
        id1.disabled= true;
        flag=1;
    }
}

function PrintLiveResult2(){
    if(flag==1){   
        id2.value= "X" ;
        id2.disabled= true;
        flag=0;
    }
    else{
        id2.value= "0";
        id2.disabled= true;
        flag=1;
    }
}

function PrintLiveResult3(){
    if(flag==1){   
        id3.value= "X" ;
        id3.disabled= true;
        flag=0;
    }
    else{
        id3.value= "0";
        id3.disabled= true;
        flag=1;
    }
}

function PrintLiveResult4(){
    if(flag==1){   
        id4.value= "X" ;
        id4.disabled= true;
        flag=0;
    }
    else{
        id4.value= "0";
        id4.disabled= true;
        flag=1;
    }
}

function PrintLiveResult5(){
    if(flag==1){   
        id5.value= "X" ;
        id5.disabled= true;
        flag=0;
    }
    else{
        id5.value= "0";
        id5.disabled= true;
        flag=1;
    }
}

function PrintLiveResult6(){
    if(flag==1){   
        id6.value= "X" ;
        id6.disabled= true;
        flag=0;
    }
    else{
        id6.value= "0";
        id6.disabled= true;
        flag=1;
    }
}

function PrintLiveResult7(){
    if(flag==1){   
        id7.value= "X" ;
        id7.disabled= true;
        flag=0;
    }
    else{
        id7.value= "0";
        id7.disabled= true;
        flag=1;
    }
}

function PrintLiveResult8(){
    if(flag==1){   
        id8.value= "X" ;
        id8.disabled= true;
        flag=0;
    }
    else{
        id8.value= "0";
        id8.disabled= true;
        flag=1;
    }
}

function PrintLiveResult9(){
    if(flag==1){   
        id9.value= "X" ;
        id9.disabled= true;
        flag=0;
    }
    else{
        id9.value= "0";
        id9.disabled= true;
        flag=1;
    }
}
let res=0;

function Winner(){
    // x winner 

    if((id1.value=='X' && id2.value=='X' && id3.value=='X') || (id4.value=='X' && id5.value=='X' && id6.value=='X') || (id7.value=='X' && id8.value=='X' && id9.value=='X') || (id1.value=='X' && id4.value=='X' && id7.value=='X') || (id2.value=='X' && id5.value=='X' && id8.value=='X') || (id3.value=='X' && id6.value=='X' && id9.value=='X') || (id1.value=='X' && id5.value=='X' && id9.value=='X') || (id8.value=='X' && id5.value=='X' && id3.value=='X')) {
        
        console.log('X is the winner');
        res=1;

        // jaise hi winner declare hua tabhi inputs dissabled  
        id1.disabled=true;
        id2.disabled=true;
        id3.disabled=true;
        id4.disabled=true;
        id5.disabled=true;
        id6.disabled=true;
        id7.disabled=true;
        id8.disabled=true;
    }

    else if( (id1.value=='0' && id2.value=='0' && id3.value=='0') || (id4.value=='0' && id5.value=='0' && id6.value=='0') || (id7.value=='0' && id8.value=='0' && id9.value=='0') || (id1.value=='0' && id4.value=='0' && id7.value=='0') || (id2.value=='0' && id5.value=='0' && id8.value=='0') || (id3.value=='0' && id6.value=='0' && id9.value=='0') || (id1.value=='0' && id5.value=='0' && id9.value=='0') || (id8.value=='0' && id5.value=='0' && id3.value=='0') ){

        console.log('0 is the winner');
        result=2;

        id1.disabled=true;
        id2.disabled=true;
        id3.disabled=true;
        id4.disabled=true;
        id5.disabled=true;
        id6.disabled=true;
        id7.disabled=true;
        id8.disabled=true;
        id9.disabled=true;

    }
}


