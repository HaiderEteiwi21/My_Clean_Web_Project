//page 2
document.getElementById("mybutton").onclick=function(){
let name = document.getElementById("myinput").value;
document.getElementById("myH1").textContent =`welcome ${name}`;
}

const mycheckbox = document.getElementById("mycheckbox");
const mycotton = document.getElementById("mycotton");
const paper = document.getElementById("paper");
const silver = document.getElementById("silver");
const visa = document.getElementById("visa");
const cash = document.getElementById("cash");
const cliq = document.getElementById("cliq");
const mysubmit = document.getElementById("mysubmit");
const newsresult = document.getElementById("newsresult");
const matresult = document.getElementById("matresult");
const moneyresult = document.getElementById("moneyresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
newsresult.textContent=`we'll email you more news soon!`;
    }
    else{
        newsresult.textContent=`we won't email you any news !`;
    }
    if(mycotton.checked){
        matresult.textContent=`you have chosen the cotton`;
    }
   else if (paper.checked){
        matresult.textContent=`you have chosen the paper`;
    }
    else if(silver.checked){
        matresult.textContent=`you have chosen the silver`;
    }
    else{
        matresult.textContent=`you have to choose a material sir`;
    }
if(visa.checked){
    moneyresult.textContent=`you have chosen to pay with visa`;
}
else if (cash.checked){
    moneyresult.textContent=`you have chosen to pay cash`;
}
else if (cliq.checked){
    moneyresult.textContent=`you have chosen to pay with cliq`;
    
    }
    else
    {
        moneyresult.textContent=`you have to choose a way to pay with`;
    }
    }

    //Page 3
    function zabutton(){
        const input_dice = Number(document.getElementById("input_dice").value);
        const result_dice =document.getElementById("result_dice");
        const picture_dice =document.getElementById("result_dice");
        const values = [];
        const images = [];
        for( let i = 0; i<input_dice ; i++){
           value = Math.floor(Math.random() * 6 + 1)
            values.push(value);
            images.push(`<img src ="dice_pics/${value}.png">`)
        }
        result_dice.textContent=`dice : ${values.join(',')}`;
        
        picture_dice.innerHTML=images.join('');
        
    }

    //page 4 

    function generatepassword(passwordlength = 12 ,HaveLowerCase = true , HaveUpperCase = true ,   HaveNumbers = true , HaveCharacters = true){
        document.getElementById ("myInput").value;
         document.getElementById ("generatebtn");
         document.getElementById ("resetbtn");

        const lowercasecharacters = "abcdefghijklmnopqrstuvwxyz"
        const uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const Numbers = "0123456789"
        const characters = "!@#$%^&*()_=+"


        let HowManyCharacters = "";
        let password = "";

            if (HaveLowerCase) HowManyCharacters += lowercasecharacters;
            if (HaveUpperCase) HowManyCharacters += uppercasecharacters;
            if (HaveNumbers) HowManyCharacters += Numbers;
            if (HaveCharacters) HowManyCharacters += characters;

       
        if (HowManyCharacters.length === 0){
            document.getElementById("myInput").value = "Select at least one character type";
            return;
        }

        for(let i = 0 ; i < passwordlength ; i++){
           const randomindex = Math.floor(Math.random() * HowManyCharacters.length)
           password += HowManyCharacters[randomindex];
            
        }
          document.getElementById("myInput").value = password;
    }
        function copyPassword (){
             const passwordField = document.getElementById("myInput");
             passwordField.select();
              passwordField.setSelectionRange(0, 99999); 
              document.execCommand("copy");
    
              const copyBtn = document.getElementById("resetbtn");
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 2000);
        }
        //done

