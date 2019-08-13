#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'docs.wasabiwallet.io' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f ${REPO_URL:='git@github.com:zksnacks/WasabiDoc.git'} master:gh-pages

cd -
