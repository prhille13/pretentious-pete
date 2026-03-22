#!/bin/bash
cd /Users/peterhille/pretentious-pete
git pull origin main
npm install
npm run build
pm2 restart pretentious-pete
