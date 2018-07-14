# Cycling Patagonia
Progressive Web App made with Quasar + Vue.js about my Patagonia bike tour in 2017-2018

Deploy to git pages
----
./node_modules/.bin/quasar build
git checkout gh-pages
cp dist/spa-mat/* . -R
// git add modified files
git push origin gh-pages

