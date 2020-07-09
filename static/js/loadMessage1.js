function loadMessage1(chat){
    texts = JSON.parse(chat);		
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