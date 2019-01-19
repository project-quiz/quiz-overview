const {ipcRenderer} = require('electron')

const leaderboardButton = document.getElementById('leaderboard')
  
leaderboardButton.addEventListener('click', () => {
    ipcRenderer.send('show-leaderboard')
})