chrome.action.onClicked.addListener((tab) => {
  const query = tab.title;
  const url = chrome.runtime.getURL("slant.html");
  chrome.tabs.create({ url }, (slantTab) => {
    console.log(slantTab.id);
    setTimeout(() => {
      console.log("hack to delay for 1 second to let the new tab fully load");
      chrome.tabs.sendMessage(slantTab.id, { query }, function(response) {
        console.log(response);
      });
    }, "1000")
  });
});
