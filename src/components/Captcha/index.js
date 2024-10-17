const Captcha = ({ message }) => {
  // Assume you have received the API response and extracted the "page" content
  const pageContent = message.page;

  // Try to decode the page content
  let decodedContent;
  try {
    decodedContent = atob(pageContent);

    // Render the decoded content in an iframe
    const iframe = document.createElement('iframe');
    iframe.srcdoc = decodedContent;
    iframe.style.position="absolute";
    iframe.style.top="0px";
    iframe.style.left="0px";
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    document.body.appendChild(iframe);

    // Add a load event listener
    iframe.addEventListener('load', function onIframeLoad() {
      try {
        // Try to access the iframe's location
        const iframeLocation = iframe.contentWindow.location.href;
        console.log(iframeLocation)
        // If accessible, we're still on the same origin
        // Optionally, you can check if iframeLocation matches the captcha page URL
      } catch (e) {
        // Cross-origin error occurred, meaning the iframe navigated away
        // Remove the iframe
        console.log(e)
        iframe.parentNode.removeChild(iframe);
        // Remove the event listener to prevent future calls
        iframe.removeEventListener('load', onIframeLoad);
        // Proceed with your application logic
        // For example, retry the API request or update the UI
      }
    });
  } catch (e) {
    console.error('Failed to decode the page content:', e);
  }

};

export default Captcha;
