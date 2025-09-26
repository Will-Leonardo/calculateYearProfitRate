#!/bin/bash
###
 # @Autor: wangliangxin3
 # @Email: wangliangxin3@jd.com
 # @Description: 
 # @Date: 2025-09-26 20:22:16
 # @LastEditors: wangliangxin3
 # @LastEditTime: 2025-09-26 20:22:19
### 
set -e

BRANCH=${1:-gh-pages}
BUILD_DIR=dist

echo "开始构建项目..."
npm run build

echo "进入构建产物目录..."
cd $BUILD_DIR

echo "初始化临时git仓库..."
git init
git checkout -b $BRANCH
git add .
git commit -m 'deploy to GitHub Pages'

echo "推送到远程分支 $BRANCH ..."
git remote add origin "$(git config --get remote.origin.url)"
git push --force origin $BRANCH

echo "清理临时git信息..."
rm -rf .git

echo "部署完成！"