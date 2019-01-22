import { app,BrowserWindow, ipcMain} from 'electron';
import * as path from "path";
import { Player } from "./src/Player";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
var players : Player[] = [];

players.push(new Player(0, "Guido", 250));
players.push(new Player(1, "Nancy", 224));
players.push(new Player(2, "Carol", 209));
players.push(new Player(3, "Shirley", 192));
players.push(new Player(4, "Betty", 183));
players.push(new Player(5, "Mary", 175));
players.push(new Player(6, "Margaret", 102));
players.push(new Player(7, "Sandra", 80));
players.push(new Player(8, "Barbara", 44));
players.push(new Player(9, "Patricia", 2));

ipcMain.on("give-me-players", function() {
  console.log("Got give me players event");
  mainWindow.webContents.send("update-players", players);
});