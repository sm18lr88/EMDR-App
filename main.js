const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');
	win.setMenu(null);
}

app.whenReady().then(createWindow);
