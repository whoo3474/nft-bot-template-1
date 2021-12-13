import { app, BrowserWindow } from "electron";
import { join } from "path";

const hasAccess = true;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: hasAccess ? 1300 : 490,
    height: hasAccess ? 800 : 350,
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
