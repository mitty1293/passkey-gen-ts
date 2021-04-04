# nodeイメージのpull,コンテナ起動
```
# docker pull node:15.13-buster-slim
# docker run -it --name node_test node:15.13-buster-slim /bin/bash
```

# 必要ディレクトリ作成
```
# mkdir project
# cd project/
# mkdir src  // tsファイルを格納する
# mkdir dist  // ビルド済のjsファイルを格納する
```

# package.json の作成
```
# npm init -y
# ls
dist  package.json  src
```
package.json はNode.jsを使ったプロジェクトの核となるファイルです。 次のような情報が入ります。
* プロジェクト自身のさまざまな情報
* プロジェクトが依存する(実行で必要、もしくは開発に必要)ライブラリの情報
* プロジェクトのビルドやテスト実行など、プロジェクト開発に必要なタスクの実行

他の人が行なっているプロジェクトのコードを見るときも、まずは package.json を起点に解析していくと効率よく探すことができます。 
この `npm init` コマンドで作成される `package.json` は、とりあえずフォルダ名から付与された名前、固定のバージョン(1.0.0)、空の説明が入っています。

# typescript,コンパイラインストール
```
# npm install --save ts-node typescript
# ls
dist  node_modules  package-lock.json  package.json  src
```
node_modulesは配布する必要はない。<br>
package.json を見ると、項目が追加されている。<br>
また、 package-lock.json という環境を構築したときの全ライブラリのバージョン情報が入ったファイルも生成される。<br>
このファイルを手で修正することはありません。

# tsconfig.json の作成
```
# npx tsc --init
message TS6071: Successfully created a tsconfig.json file.
# ls
dist  node_modules  package-lock.json  package.json  src  tsconfig.json
```
何も設定せずとも、TypeScriptのコンパイルは可能ですが、入力フォルダを設定したい、出力形式を調整したい、いくつかのデフォルトでオフになっている新しい機能を使いたいなどの場合は設定ファイル tsconfig.json を作成します。

https://maku.blog/p/27m3brm/<br>
tsconfigの設定はこれを見る事

https://qiita.com/reflet/items/538753d5dcf3560567a9<br>
設定例