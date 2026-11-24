# 3D Viewer (STL + 3MF)
Multi-file (max 10) viewer with size, volume and approx weight. Scene mode / Grid mode.

## Android APK (GitHub Actions)
1. Is folder ko GitHub repo me push karo (branch `main`).
2. Repo > **Actions** tab > "Build Android APK" run hone do (~5-8 min).
3. Run kholo > neeche **Artifacts** > `viewer3d-apk` download karo, zip se `app-debug.apk` nikalo, phone me install karo.

## Local run
`npm install && npm run dev`

## Windows app (GitHub Actions)
Actions tab > "Build Windows App" > Artifacts > `viewer3d-windows` > zip se `...-nsis.exe` (installer) ya `...-portable.exe` (bina install) chalao.

## Features
File menu (save/open/import/export), Move/Rotate/Scale tools, W/D/H mm labels, material presets, mesh check, undo/redo, autosave.
