// Modules to control application life and create native browser window
const  { app, BrowserWindow } = require('electron')
const path = require('path')
const url  = require('url')

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(
    process.env.NODE_ENV === 'production'
      ? url.format({
        pathname: path.join(staticPath, 'build', 'index.html'),
        protocol: 'file:',
        slashes: true
      })
      : 'http://localhost:3000'
  );

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it is common to re-create a window even after all windows have been closed
  if (!mainWindow) {
    createWindow();
  }
});

// Create main BrowserWindow when electron is ready
app.on('ready', () => {
  createWindow();
});
