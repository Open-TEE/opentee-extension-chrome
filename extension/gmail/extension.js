console.log('you\'r in the world of extension.js');

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.datain) {
      sendResponse({dataout:request.datain.replace('is','are')});
    }
  });