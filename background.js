chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ selectedColor: "#008F11" });
    console.log("Matrix Colorizer installed with default green color.");
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle_matrix") {
        chrome.storage.sync.get("selectedColor", (data) => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: toggleMatrixMode,
                        args: [data.selectedColor || "#008F11"]
                    });
                }
            });
        });
    }
});

function toggleMatrixMode(color) {
    const currentColor = document.body.getAttribute("data-matrix-mode");
    
    if (currentColor) {
        location.reload();  // Réinitialiser la page
    } else {
        document.querySelectorAll('*').forEach(el => {
            el.style.color = color;
            el.style.backgroundColor = 'black';
        });
        document.body.setAttribute("data-matrix-mode", "enabled");
    }
}
