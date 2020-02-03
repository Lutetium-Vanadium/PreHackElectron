const { app, BrowserWindow } = require("electron");

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("./public/index.html");
};

app.on("ready", createWindow);
