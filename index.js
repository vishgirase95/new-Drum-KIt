


document.addEventListener("keypress", function(Event){
    
    var keyress= Event.key;
    makeSound(keyress) ;
    makeShadow(keyress);

});



var numDrum= document.querySelectorAll(".drum").length ;

for(var i=0; i<=numDrum; i++){



 
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      
     

        var keyress=this.innerHTML;

        makeSound(keyress);
        makeShadow(keyress);

        
      });
    };







 function makeSound(keyress){   

    switch (keyress) {
        case "w":

           var audio = new Audio('sounds/crash.mp3');
          audio.play();
    

            
               
            break;
                 
                 case "a":

           var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
    


            break;

            case "s":

           var audio = new Audio('sounds/snare.mp3');
          audio.play();
        
               
            break;

            case "d":

           var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
        
            break;

            case "j":

           var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
    
               
            break;

            case "k":

           var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
    
               
            break;
            
            case "l":

           var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
        
            break;
            
        default:
            console.log("wrong input");
            break;
    };
 };




function makeShadow(Event){



    document.querySelector("."+Event).classList.add("pressed");

    document.querySelector("."+Event).style.color="white";



    setTimeout(function(){
    document.querySelector("."+Event).style.color=" #DA0463";

    
    
    
        },1000);




    setTimeout(function(){
    document.querySelector("."+Event).classList.remove("pressed");


    },1000);
}









//         switch (innerHTML) {
//             case "w":

//                var audio = new Audio('sounds/crash.mp3');
//               audio.play();
        

                   
//                 break;
                     
//                      case "a":

//                var audio = new Audio('sounds/kick-bass.mp3');
//               audio.play();
                   
//                 break;

//                 case "s":

//                var audio = new Audio('sounds/snare.mp3');
//               audio.play();
                   
//                 break;

//                 case "d":

//                var audio = new Audio('sounds/tom-1.mp3');
//               audio.play();
                   
//                 break;

//                 case "j":

//                var audio = new Audio('sounds/tom-2.mp3');
//               audio.play();
                   
//                 break;

//                 case "k":

//                var audio = new Audio('sounds/tom-3.mp3');
//               audio.play();
                   
//                 break;
                
//                 case "l":

//                var audio = new Audio('sounds/tom-4.mp3');
//               audio.play();
                   
//                 break;
                
//             default:
//                 break;
//         }
        
        
//     }
//     );

    
// };




