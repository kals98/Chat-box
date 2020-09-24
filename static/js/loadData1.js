function loadData1(datainput){
    data = JSON.parse(datainput);
    var c='';
    for(j=0 ; j < data.length; j++){
    if(data[j].type == "user"){
      var b = "<h5 class='card-text text-right'>User:" + data[j].msg + "</h5><br>";
      c = c + b;
      }else{
      var b = "<h5 class='card-text text-left text-primary'>Agent:" + data[j].msg + "</h5><br>";
      c = c + b;
      }
    }
    console.log(c);
    return c;
  }