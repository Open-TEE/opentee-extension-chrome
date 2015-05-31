//parses json received from CA

function onNativeMessage(msg) {
  appendMessage("Received message: " + JSON.stringify(msg));
  tee_parse_json(msg);
}

function onDisconnected() {
  appendMessage("Failed to connect: " + chrome.runtime.lastError.message);
  tee_disconnect();
  g_mode = "NOT_CONNECTED";
  updateUiState;
}

function onTestMode() {
  g_mode = "TEST";
  updateUiState();
}

function onDecryptMode() {
  g_mode = "DECRYPT";
  updateUiState();
}

function onEncryptMode() {
  g_mode = "ENCRYPT";
  updateUiState();
}

function onAddkeyMode() {
  g_mode = "ADDKEY";
  updateUiState();
}
