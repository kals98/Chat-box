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
    loadData1(localStorage.chat);
    }
    else{
      loadData1(localStorage.chat);
    }
        $.post("/", {type:"user",srno:i,msg:userMsg});
        $("#usermsg").attr("value", "");
        return false;
    });
    
  //if user receives data from localstorage
  $("#receivedata").click(function(){
    var b;
    confibean = JSON.parse(localStorage.confibean);	
    if(confibean[0]['type']=="chat" && localStorage.data){
      $.ajax({
        success: function(html){
          b = loadData1(localStorage.data);
          console.log(b);
          $("#databox").html(b);
            },
          });
    }else{
      console.log("no data input");
    }
    return false;
    });


function deleteLog(){
  localStorage.removeItem("data");
  console.log(localStorage.data)
  data = [];
  console.log(data);
}