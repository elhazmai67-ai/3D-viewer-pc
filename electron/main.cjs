const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1280, height: 800, backgroundColor: '#0f1115', title: '3D Viewer', autoHideMenuBar: true });
  w.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
