const transition = () => {
    let from = location.href
    let to = from.replace('shorts', 'watch')
    location.replace(to)
}
chrome.tabs.onUpdated.addListener(
    (tabId, info, tab) => {
        if (tab.url.indexOf('https://www.youtube.com/shorts/') != -1) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: transition
            });
        }
    }
)

