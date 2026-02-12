@echo off
cd website
start "" "http://127.0.0.1:8000/index.html"
python -m http.server