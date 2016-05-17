chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);
var word = "Jon Snow",
    queue = [document.body],
    curr
;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    console.log("Found!");
                    console.log(curr);
                    curr.style.backgroundColor = "red";
                    // you might want to end your search here.
                }
                break;
            case Node.ELEMENT_NODE : // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}