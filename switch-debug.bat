@echo off
echo Switching to debug version...
cd /d "c:\Users\pc\Desktop\Beutiful-PORTFOLIO\src"
if exist "App.original.jsx" (
    echo Restoring original...
    move "App.jsx" "App.fixed.jsx"
    move "App.original.jsx" "App.jsx"
) else (
    echo Creating debug version...
    move "App.jsx" "App.original.jsx"
    move "App.debug.jsx" "App.jsx"
)
echo Done! Now run: npm run build && npm run preview
