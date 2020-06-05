console.log('starting papers.link background script (loaded from github)');

browser.browserAction.onClicked.addListener((tab) => {
    console.log('current tab: ', tab);

    browser.tabs.executeScript(
      tab.id,
      { url: 'http://www.example.com' }
    )
});

