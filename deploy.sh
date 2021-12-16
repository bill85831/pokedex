# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f git@github.com:bill85831/pokedex.git master:gh-pages
cd -