var listModule = (function() {
  // HTML vars
  var list        = document.getElementById("list");
  var pushButton  = document.getElementById("push");
  var clearButton = document.getElementById("clear");

  /**
   * Run this at the bottom to self invoke, otherwise reveal and call listModule.init() later
   *
   * @return {undefined}
   */
  function init() {
    bindUIActions();
  }

  function pushToList() {
    var text = document.getElementById("textbox").value;

    if (text) {
      var nextTag = document.createElement("li");
      var nextElement = document.createTextNode(text);

      nextTag.appendChild(nextElement);
      list.appendChild(nextTag);
    }
  }

  function clearList() {
    var listCount = list.childElementCount;

    if (listCount > 0) {
      list.innerHTML = "";
    }
  }

  function bindUIActions() {
    push.addEventListener("click", pushToList);
    clear.addEventListener("click", clearList);
  }

  // Self invoking
  init()
})();
