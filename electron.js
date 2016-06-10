const electron = require('electron');
// Module to control application life.
const {app} = electron;
// Module to create native browser window.
const {BrowserWindow} = electron;
// Module to create a custom menu
const Menu = electron.Menu;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Set up a custom menu
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
  // Create the browser window.
  win = new BrowserWindow({
		width: 1600, 
		height: 1000,
		alwaysOnTop: false,
		titleBarStyle: 'hidden',
		frame: false,
    title: "I'm So Funky Fresh"
  });

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  //win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var menuTemplate = [
  {
    label: 'Calltrics',
    submenu: [
      {
        label: 'Calltrics v 3.0.0' , //-> UPDATE LOCATION 1 - Change the Version number to your current build when updating.
        enabled: false
      },
      {
        type: 'separator'
      },
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+H',
        role: 'minimize'
      },
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function(item, focusedWindow) {
          if (focusedWindow)
          focusedWindow.reload();
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        selector: 'terminate:'
      }
    ]
  }
];