const gameState = localStorage.getItem("gameState");
chrome.storage.sync.set({gameState});
