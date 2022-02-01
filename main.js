function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DFnEmKyw1/model.json',model_ready)
}
function model_ready(){
classifier.classify(getResults);}

function getResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r=(Math.random()*255).toFixed(0);
        console.log("red = "+r);
        g=(Math.random()*255).toFixed(0);
        console.log("green = "+g);
        b=(Math.random()*255).toFixed(0);
        console.log("blue = "+b);
        
        document.getElementById('result_hear').innerHTML="I can hear - "+results[0].label;
        document.getElementById('result_confidence').innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(1)+" %";
        document.getElementById('result_hear').style.color="rgb("+r+","+g+","+b+")";
        document.getElementById('result_confidence').style.color="rgb("+r+","+g+","+b+")";
    
        img=document.getElementById("1");
       

        function stop(){
            stop.img;
        }
    
        if(results[0].label=="Cat")
        {
 
    img.src="CAT.gif";
    stop;  
    
    

        }
        else if(results[0].label=="Dog"){
          
            img.src="DOG.gif";
           stop;
          
            
    }
    else if(results[0].label=="Elephant"){
        img.src="ELEPHANT.gif";
        stop;
      
            }
    else if(results[0].label=="Cow"){
                img.src="COW.gif";
                stop;
                    }
                }       
    
    
        
    }