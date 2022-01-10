const button = document.querySelector('#tbtn-2');
const tooltip = document.querySelector('#tooltip-2');

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
Popper.createPopper(button, tooltip, {
  placement:'top',
});
