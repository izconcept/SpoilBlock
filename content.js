chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log(firstHref);
  }
}
);
var word = /jon snow|game of thrones|song of ice and fire|dany/i;
var queue = [document.body],
curr
;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word[i])) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
       switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3/
            current = curr.childNodes[i].textContent;
            if (current.search(word) != -1) {
                console.log("Found!");
                console.log(curr);
                curr.style.backgroundColor = "red";
            }
            break;
            case Node.ELEMENT_NODE : // 1
            queue.push(curr.childNodes[i]);
            break;
        }
    }
}