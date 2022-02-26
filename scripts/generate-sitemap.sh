cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd scripts

node ./robots.js
node ./sitemap.js