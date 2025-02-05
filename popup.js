document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const applyButton = document.getElementById("applyColor");
    const resetButton = document.getElementById("resetColor");

    // Charger la couleur stockée
    chrome.storage.sync.get("selectedColor", (data) => {
        if (data.selectedColor) {
            colorPicker.value = data.selectedColor;
        }
    });

    applyButton.addEventListener("click", () => {
        const color = colorPicker.value;

        chrome.storage.sync.set({ selectedColor: color });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: changeColors,
                args: [color]
            });
        });
    });

    resetButton.addEventListener("click", () => {
        chrome.storage.sync.remove("selectedColor");

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: resetColors
            });
        });
    });
});

function changeColors(color) {
    document.querySelectorAll('*').forEach(el => {
        el.style.color = color;
        el.style.backgroundColor = 'black';
    });
}

function resetColors() {
    location.reload();
}
