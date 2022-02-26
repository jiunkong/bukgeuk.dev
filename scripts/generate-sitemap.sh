cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd script

node ./robots.js
node ./sitemap.js