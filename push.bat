@echo off
cd /d C:\Users\USER\joy-portfolio

git init
git config user.name "Joy Alozie"
git config user.email "joybenalozie@gmail.com"
git add .
git commit -m "Initial commit: Joy Alozie portfolio website"
git branch -M main
git remote add origin https://github.com/joybenalozie/joy-portfolio.git
git push -u origin main

pause
