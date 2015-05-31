function tee_parse_json(msg) {
  //check the mode we are on and do stuff based on that
  if (msg.text === "error") {
    console.log("there was an error");
    return;
  }

  console.log("parsing json");
  console.log(JSON.stringify(msg));

  //check if we are processing a request from extension
  if(g_reply)
  {
    console.log(msg.payload);
    var tmp = null;

    tmp = msg.payload;

    g_reply.postMessage({dataout:tmp});
    g_reply.disconnect();
    g_reply = null;
    g_replymode = null;
    return;
  }

  switch (g_mode) {
    case "NOT_CONNECTED":
      //do nothing
      break;
    case "CONNECTED":
      //do nothing
      break;
    case "DECRYPT":
      //update the output with payload
      displayResponse(window.atob(msg.payload));
      break;
    case "ENCRYPT":
      //update the output with payload
      displayResponse(msg.payload);
      break;
    case "TEST":
      //do nothing
      break;
    case "ADDKEY":
      //do noTYHINTHINTHgh
      break;
  }
}
