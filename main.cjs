const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Création de la fenêtre de navigation
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    // Optionnel : Vous pourrez ajouter l'icône de l'application ici plus tard
    //icon: path.join(__dirname, 'dist/icon.ico')
  });

  // Supprimer la barre de menu par défaut (Fichier, Édition, etc.)
  win.setMenu(null);

  // Charger le fichier index.html généré par le build de Vite
  win.loadFile(path.join(__dirname, 'dist/index.html'));
}

// Cette méthode sera appelée quand Electron aura fini de s'initialiser
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quitter l'application quand toutes les fenêtres sont fermées (sauf sur Mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});