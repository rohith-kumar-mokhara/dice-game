
    let ran1=Math.floor(Math.random()*6)+1;
    let image_one=document.getElementsByClassName("img1")[0]
    let rand1="dice"+ran1+".png"
    let rand1_sr="images/"+rand1
    image_one.setAttribute("src",rand1_sr)
    let ran2=Math.floor(Math.random()*6)+1;
    let rand2="dice"+ran2+".png"
    let rand2_sr="images/"+rand2
    let image_two=document.getElementsByClassName("img2")[0]
    image_two.setAttribute("src",rand2_sr)
    if(ran1>ran2){
        let tag=document.getElementsByTagName("h1")[0]
        tag.innerHTML="Player 1 won!!"
    }
    else if(ran2>ran1){
        let tag=document.getElementsByTagName("h1")[0]
        tag.innerHTML="Player 2 won!!"
    }
    else{
        let tag=document.getElementsByTagName("h1")[0]
        tag.innerHTML="It is a draw!"
    }
