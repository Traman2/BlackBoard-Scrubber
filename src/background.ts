chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "START_SCRAPE") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      //Block new tab, history so on
      if (!tab || !tab.id || !tab.url || tab.url.startsWith("chrome://")) {
        console.warn("Cannot inject into this page:", tab?.url);
        return;
      }

      //Block other pages
      if (!tab.url.includes("elearning.utdallas.edu")) {
        console.warn("Script can only run on elearning.utdallas.edu domain. Current URL:", tab.url);
        chrome.runtime.sendMessage({
          type: "DOMAIN_ERROR",
          message: "Please navigate to elearning.utdallas.edu first"
        });
        return;
      }

      //inject web scrape script into website
      if (tab.url.includes("elearning.utdallas.edu/ultra/course")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
        });
      } else {
        chrome.tabs.update(tab.id, { url: "https://elearning.utdallas.edu/ultra/course" }, () => {
          setTimeout(() => {
            chrome.scripting.executeScript({
              target: { tabId: tab.id! },
              files: ["content.js"]
            });
          }, 6000);
        });
      }
    });
  }
});