import React from "react";

const Download = () => (
  <div className="container">
    <h1>Download the Chrome Extension</h1>
    <p>Follow the instructions to install it:</p>
    <ol>
      {[
        {
          text: (
            <>
              Go to{" "}
              <a
                href="https://chromewebstore.google.com/category/extensions?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                ExtensionChrome
              </a>
            </>
          ),
        },
        { text: "Enable 'Developer mode'" },
        { text: 'Click "Load unpacked" and select the extension folder' },
      ].map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ol>
  </div>
);

export default Download;
