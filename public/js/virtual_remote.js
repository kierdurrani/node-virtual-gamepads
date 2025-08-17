document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.navpadbutton, .navpadbuttonback, .button').forEach(btn => {
    btn.addEventListener('click', function() {
      const label = btn.innerText.trim();
      let key;
      switch(label) {
        case '▲': key = 'ArrowUp'; break;
        case '▼': key = 'ArrowDown'; break;
        case '◀': key = 'ArrowLeft'; break;
        case '▶': key = 'ArrowRight'; break;
        case 'OK': key = 'Enter'; break;
        case '←': key = 'Escape'; break;
        case 'Vol +': key = 'VolumeUp'; break;
        case 'Vol -': key = 'VolumeDown'; break;
        case 'Subtitles': key = 'Subtitle'; break;
        case 'Fullscreen': key = 'F11'; break;
        default: return;
      }
      // Call the hub function if available
      if (window.virtualKeyboardHub && typeof window.virtualKeyboardHub.sendKey === 'function') {
        window.virtualKeyboardHub.sendKey(key);
      }
    });
  });
});