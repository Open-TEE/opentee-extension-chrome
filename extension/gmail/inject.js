function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function encrypt(id) {
  console.log('encrypting content(' + id + ')->');

  var element = document.getElementById(id);
  console.log(element.innerText);
  console.log(element.textContent);
  console.log(utf8_to_b64(element.textContent));

  var port = chrome.runtime.connect("knldjmfmopnpolahpmmgbagdohdnhkik",{name: "opentee_dec"});
  //TODO: base64 the message first
  port.postMessage({datatocrypt:window.btoa((element.innerText))});
  port.onMessage.addListener(function(response) {
    console.log('encrypting content(' + id + ')<-');
    if (response.dataout) {
      console.log(response.dataout);
      element.textContent="crypted_stuff " + response.dataout + "-";
      element.style.visibility = 'visible';
    }
  });
};

function decrypt(id) {
  console.log('showing content(' + id + ')->');

  var element = document.getElementById(id);
  //console.log(element.textContent);
  var datatodecrypt = element.textContent.split('-')[0];
  // Make a simple request:
  var port = chrome.runtime.connect("knldjmfmopnpolahpmmgbagdohdnhkik",{name: "opentee_dec"});
  port.postMessage({datain:datatodecrypt});
  port.onMessage.addListener(function(response) {
    console.log('showing content(' + id + ')<-');
    if (response.dataout) {
      console.log(response.dataout);
      element.innerText=window.atob(response.dataout);
      element.style.visibility = 'visible';
    }
  });
};
