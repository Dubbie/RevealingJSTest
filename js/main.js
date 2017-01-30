var listModule = (function () {
  
  var list = document.getElementById("list");
  var push = document.getElementById("push");
  var clear = document.getElementById("clear");
  
  
  this.pushFunction =  function () {
    
  var text = document.getElementById("textbox").value;
    if (text){
      var nexttag = document.createElement("li");
      var nextelement = document.createTextNode(text);
      
      nexttag.appendChild(nextelement);
      list.appendChild(nexttag);
      }
    };
    
  this.clearFunction = function () {
  
    var listcount = list.childElementCount;
      if (listcount > 0) {
        list.innerHTML = "";
      }
    };
  
  this.bindUIActions = function () {
    push.addEventListener("click", this.pushFunction);
    clear.addEventListener("click", this.clearFunction);
  };

  bindUIActions();
}) ();