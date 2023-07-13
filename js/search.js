document.getElementById('search-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var searchQuery = this.value.toLowerCase();
    var gameImages = document.querySelectorAll('.game-list .game');
    var noMatchMessage = document.getElementById('error-message');
    var foundMatch = false;

    // Loop through the game images and hide/show based on search query
    for (var i = 0; i < gameImages.length; i++) {
      var gameTitle = gameImages[i].querySelector('img').getAttribute('data-game').toLowerCase();
      var gameTitleSplit = gameTitle.split(',');

      if (gameTitleSplit.some(function(title) { return title.trim().includes(searchQuery); })) {
        gameImages[i].style.display = 'inline-block';
        foundMatch = true;
      } else {
        gameImages[i].style.display = 'none';
      }
    }

    // Show/hide the no match message
    if (foundMatch) {
      noMatchMessage.style.display = 'none';
    } else {
      noMatchMessage.style.display = 'block';
    }

    this.value = ''; // Clear the search input field
  }
});
