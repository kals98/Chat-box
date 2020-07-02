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
    loadMessage1(localStorage.chat);
    }
    else{
      loadMessage1(localStorage.chat);
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
   loadMessage1(localStorage.chat);
   }
   else{
    loadMessage1(localStorage.chat);
   }
     $("#usermsg").attr("value", "");
     return false;
    });
});

function deleteLog(){
  localStorage.removeItem("chat");
  console.log(localStorage.chat)
  texts = [];
  console.log(texts);
}