const {ipcRenderer} = require('electron')

const leaderboardButton = document.getElementById('button-leaderboard')
  
leaderboardButton.addEventListener('click', () => {
    ipcRenderer.send('show-leaderboard')
})