// var texts = [{type:"agent",srno:1,msg:"hello"},{type:"agent",srno:1,msg:"How may I help You?"},{type:"user",srno:1,msg:"Hi pls help"}];


// jQuery Document
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
        $.post("/", {type:"user",srno:i,msg:userMsg});
        $("#usermsg").attr("value", "");
        return false;
    });

  //if user receives message from agent
  $("#receivemsg").click(function(){	
    loadMessage1(localStorage.chat,localStorage.confibean);
    return false;
    });


function deleteLog(){
  localStorage.removeItem("chat");
  console.log(localStorage.chat)
  texts = [];
  console.log(texts);
}