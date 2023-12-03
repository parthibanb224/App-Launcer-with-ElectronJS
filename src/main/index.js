import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
var child = require('child_process').execFile;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-youtube-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-google-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-twitter-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-linkedin-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-facebook-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-instagram-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-whatsapp-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-gmail-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-amazon-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-flipkart-50.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-spotify-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-gaana-50.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-google-drive-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-google-meet-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-google-maps-old-48.png'),
    icon: path.join(__dirname, 'src', 'renderer', 'src', 'assets', 'icons8-app-launcher-48.png'),
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.


ipcMain.handle("openCoderJeet", (event,url) => {
  shell.openExternal(url);
});

ipcMain.handle("loadExplorer", () => {
  //shell.openExternal("file://c:/windows/explorer.exe");

  child("c:\\windows\\explorer.exe",["C:\Program Files\Google\Chrome\Application\chrome.exe"], function(err, data) {
    if(err){
      console.log(err);
      return;
    }

    console.log(data.toString());
  })
});