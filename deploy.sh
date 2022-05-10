#!/bin/sh

git pull --ff-only

npm install

npm run buildProd

cd ./dist

zip -r ./taoofcoding-next.zip * -x "*.DS_Store"

scp -P 10010 ./taoofcoding-next.zip lingen@taoofcoding.tech:/tmp

rm ./taoofcoding-next.zip

ssh -p 10010 lingen@taoofcoding.tech 'bash -s' < ../auto_deploy.sh
