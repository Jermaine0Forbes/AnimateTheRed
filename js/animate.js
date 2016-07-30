window.onload = function(){
var btn = document.getElementsByTagName('button'),
    put = document.getElementById('put'),
    red = document.getElementById('red'),
  sound = new Audio("sound/noiseKick.wav");




  var obj ={
    btn:btn,
    put:put,
    red:red,
    moving:function(pos){
      let num = 0;
      var that = this, current,
      hold = 0,
      redW = (that.put.clientWidth - that.red.clientWidth),
      redH =(that.put.clientHeight - that.red.clientHeight),
      calculate;
      ;
 function move(){
   num++;
   calculate =(num*1.5)/3;
   if( pos == "up"){
     current = ( that.red.style.bottom == "")? redH : that.red.style.bottom;
     if (typeof current == "string"){
       current = current.replace("px","");
       current = parseInt(current,10);
     }

     current +=calculate;
current = current.toFixed(2);
     hold +=calculate;
     current = (current > redH)? redH: current;

     that.red.style.bottom = current+"px";
     if(current >= redH){ sound.play();}
   }else if(pos == "bottom"){
     current = ( that.red.style.bottom == "")? redH: that.red.style.bottom;
     if (typeof current == "string"){
       current = current.replace("px","");
       current = parseInt(current,10);
     }
     current -=calculate;
current = current.toFixed(2);
     hold +=calculate;
     current = (current < 0)? 0:current;
    that.red.style.bottom = current+"px";
    if(current <= 0){ sound.play();}
   }else if(pos == "left"){
     current = ( that.red.style.right == "")? 0 : that.red.style.right;
     if (typeof current == "string"){
       current = current.replace("px","");
       current = parseInt(current,10);

     }
     hold +=calculate;
     current +=calculate;
current = current.toFixed(2);
     current = (current > redW || current <= 0)? redW:current;
     that.red.style.right = current+"px";
     if(current == redW){ sound.play();}
   }else if(pos == "right"){

     current = ( that.red.style.right == "")? redW : that.red.style.right;
     if (typeof current == "string"){
       current = current.replace("px","");
       current = parseInt(current,10);
     }

     hold +=calculate;

     current -=calculate;
current = current.toFixed(2);
 current =(current < 0 )?0:current;
that.red.style.right = current+"px";
     if(current == 0){ sound.play();}
   }

   if(num >= 10)
   {
     clearInterval(timer);
     num = 0;
     hold = 0;
   }

 };//move

      let timer = setInterval(move,5);
    },//obj.moving
    run: function(){
      for( var i = 0; i < this.btn.length; i++){

          let button = this.btn[i];

        button.onclick = function(){

          if(button.id == "btn1"){
          this.moving("up");
        }else if(button.id == "btn2"){

           this.moving("left");
        }else if(button.id == "btn3"){

            this.moving("right");
        }else if(button.id == "btn4"){

            this.moving("bottom");
        }else{

           console.log("Something is wrong")
        };


      }.bind(this);//btn[].onclick


      }// for loop


    }//obj.run


  };// end of obj object

obj.run();




}// window.onload
