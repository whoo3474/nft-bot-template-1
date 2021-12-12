import { app, BrowserWindow } from "electron";
import { join } from "path";

const hasAccess = false;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: hasAccess ? 500 : 490,
    height: hasAccess ? 500 : 350,
    title: "Bot Name",
    frame: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    app.isPackaged
      ? `file://${join(__dirname, "../build/index.html")}`
      : "http://localhost:3000"
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (!BrowserWindow.getAllWindows().length) {
    createWindow();
  }
});
