var texts = [{type:"agent",srno:1,msg:"hello"},{type:"agent",srno:1,msg:"How may I help You?"},{type:"user",srno:1,msg:"Hi pls help"}];
var i=0;

function init(){
  if(localStorage.chat){
    texts = JSON.parse(localStorage.chat);
    i=texts.length;
  }
  else{
    localStorage.chat = JSON.stringify(texts);
    i=texts.length;
  }
}

// jQuery Document
$(document).ready(function(){
  //If user enters and sends a message
    $("#submitmsg").click(function(){	
    var userMsg = $("#usermsg").val();
    if(userMsg != ""){
    var text = {type:"user",srno:i,msg:userMsg};
    console.log(texts);
    texts.push(text);
    localStorage.chat = JSON.stringify(texts);
    i++;
    loadLog();
    }
    else{
      loadLog();
    }
        $("#usermsg").attr("value", "");
        return false;
    });

  //if user receives message from agent
  $("#receivemsg").click(function(){	
   var agentMsg = $("#usermsg").val();
   if(agentMsg != ""){
   var text = {type:"agent",srno:i,msg:agentMsg};
   texts.push(text);
   localStorage.chat = JSON.stringify(texts);
   i++;
   loadLog();
   }
   else{
   loadLog();
   }
     $("#usermsg").attr("value", "");
     return false;
    });
});



function loadLog(){		
    $.ajax({
        success: function(html){
    var c ="";
    for(j=0 ; j < texts.length; j++){
    if(texts[j].type == "user"){
      var b = "<h5 class='card-text text-right'>User:" + texts[j].msg + "</h5><br>";
      c = c + b;
      }else{
      var b = "<h5 class='card-text text-left text-primary'>Agent:" + texts[j].msg + "</h5><br>";
      c = c + b;
      }
    }
    $("#chatbox").html(c);//Insert chat log into the #chatbox div	
          },
      });
  }

function deleteLog(){
  localStorage.removeItem("chat");
  console.log(localStorage.chat)
  texts = [];
  console.log(texts);
}