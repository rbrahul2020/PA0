console.log("start");

let encriptBox= document.getElementsByClassName("encript")[0];
let decriptBox= document.getElementsByClassName("decript")[0];
let key=10;

//run encriptFunction when any change on input on encriptBox
encriptBox.oninput= encryptFunction;

//run decriptFunction when any change on input on decriptBox
decriptBox.oninput= decryptFunction;

function encryptFunction(e)
{
    console.log("onchange");
    let plainText = e.target.value;
    console.log(plainText);
    let cipherText = encript(plainText,key);
    decriptBox.value= cipherText;
}

function decryptFunction(e)
{
    console.log("onchange");
    let cipherText = e.target.value;
    console.log(cipherText);
    let plainText = decript(cipherText,key);
    encriptBox.value= plainText;
}

// encript string by key value x
function encript(str,x)
{   
    let Ans="";
    for(i=0;i<str.length;i++)
    {
        if(str[i]<='z' && str[i]>='a')
        {
            
            let val=str.charCodeAt(i);
            val-="a".charCodeAt(0);
            val+=x;
            val%=26;
            val+=65;
            
            let ans=String.fromCharCode(val)
            Ans+=ans;
            //console.log(ans)
        }
        else if(str[i]<='Z' && str[i]>='A')
        {
            
            let val=str.charCodeAt(i);
            val-="A".charCodeAt(0);
            val+=x;
            val%=26;
            val+=97;
            
            let ans=String.fromCharCode(val)
            Ans+=ans; 
            //console.log(ans)
        }
        else
        {
            console.log(' ');
            Ans+=' ';
        }
    }
    return(Ans);
}

// decrypt string which is encrypted by key x
function decript(str,x)
{
    x=26-x;
    let ss="";
    for(i=0;i<str.length;i++)
    {
        if(str[i]<='z' && str[i]>='a')
        {
            
            let val=str.charCodeAt(i);
            val-="a".charCodeAt(0);
            val+=x;
            val%=26;
            val+=65;
            
            let ans=String.fromCharCode(val)
            ss+=ans;
        }
        else if(str[i]<='Z' && str[i]>='A')
        {
            
            let val=str.charCodeAt(i);
            val-="A".charCodeAt(0);
            val+=x;
            val%=26;
            val+=97;
            
            let ans=String.fromCharCode(val)
            ss+=ans;
        }
        else
        {
            ss+=" ";
        }
    }
    return(ss);
}

