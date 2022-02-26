cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd scripts

node ./robots.mjs
node ./sitemap.mjs