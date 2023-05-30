function popBalloon(balloon, message) {
    balloon.style.opacity = '0';
    setTimeout(function () {
      balloon.style.display = 'none';
    }, 1000);
  
    var messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.innerHTML =
      '<span class="close-button" onclick="closeMessageBox(this)">&times;</span>' +
      message;
    document.body.appendChild(messageBox);
  
    var overlay = document.getElementById('overlay');
    overlay.classList.add('emphasized');
    messageBox.classList.add('emphasized');
  }
  
  function closeMessageBox(closeButton) {
    var messageBox = closeButton.parentNode;
    messageBox.parentNode.removeChild(messageBox);
    var overlay = document.getElementById('overlay');
    overlay.classList.remove('emphasized');
  }
