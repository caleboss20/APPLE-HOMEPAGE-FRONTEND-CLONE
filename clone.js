       
       
     
        function videoplay(){


         let video=document.querySelector(".myvideo");
       let big_phone_img=document.querySelector('.big-phone-img');
       let play_btn=document.querySelector('.play-btn');
      //  video.style.display="block";
      //  big_phone_img.style.display="none";


      video.play();
      play_btn.style.display="none";

     video.addEventListener("timeupdate",()=>{

   
      
       if(video.currentTime>=9){
        video.pause();

        play_btn.style.display="block";


      }
     })


       }
        