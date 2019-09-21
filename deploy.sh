#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

if [ -z "$COMMIT_EMAIL" ]
then
  COMMIT_EMAIL="${GITHUB_ACTOR}@users.noreply.github.com"
fi

if [ -z "$COMMIT_NAME" ]
then
  COMMIT_NAME="${GITHUB_ACTOR}"
fi

# Configures Git.
git init && \
git config --global user.email "${COMMIT_EMAIL}" && \
git config --global user.name "${COMMIT_NAME}" && \

git config --list

## Initializes the repository path using the access token.
#REPOSITORY_PATH="https://${access_token}@github.com/he148420/test.git" && \

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f $REPOSITORY_PATH master:gh-pages

cd -
