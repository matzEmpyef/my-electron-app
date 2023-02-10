const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Master Certification App',
    width: 1400,
    height: 700,
    minWidth: 1100,
    minHeight: 400,
    center: true,
    icon: __dirname + '/favicon.ico',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, './master-app/build/index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startUrl);
}


app.whenReady().then(createMainWindow);