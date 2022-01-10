  const button = document.querySelector('#tbtn-1');
  const tooltip = document.querySelector('#tooltip-1');

  // Pass the button, the tooltip, and some options, and Popper will do the
  // magic positioning for you:
  Popper.createPopper(button, tooltip, {
    placement:'top',
  });

  