set /P commit=commit： 
git add .
git commit -m "%commit%"
git push origin main