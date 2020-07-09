// var texts = [{type:"agent",srno:1,msg:"hello"},{type:"agent",srno:1,msg:"How may I help You?"},{type:"user",srno:1,msg:"Hi pls help"}];
var texts=[];
var i=0;
// async/await
async function myFetch() {
    let response = await fetch("http://127.0.0.1:5000/chat-messages")
    .then(resp => resp.json())
    .then(jsonData => {
      console.log(jsonData);
      var textdata = jsonData;
      initialize(textdata);
    })
    .catch(err => console.log(err));

}
myFetch();


function initialize(textdata) {
  texts = textdata;
  if(localStorage.chat){
    texts = JSON.parse(localStorage.chat);
    i=texts.length;
  }
  else{
    localStorage.chat = JSON.stringify(texts);
    i=texts.length;
  }
};



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


function deleteLog(){
  localStorage.removeItem("chat");
  console.log(localStorage.chat)
  texts = [];
  console.log(texts);
}