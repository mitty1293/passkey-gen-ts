# nodeイメージのpull,コンテナ起動
```shell
# docker pull node:15.13-buster-slim
# docker run -it --name node_test node:15.13-buster-slim /bin/bash
```

# 必要ディレクトリ作成
```shell
# mkdir project
# cd project/
# mkdir src  // tsファイルを格納する
# mkdir dist  // ビルド済のjsファイルを格納する
```

# package.json の作成
```shell
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

# ビルド用npmスクリプトの定義
Node.js でのアプリ開発に使用する `package.json` には、任意のスクリプトを定義することができる。<br>
ここでは build というスクリプトを定義して一連のビルドを行えるようにしたい。<br>
`npm run build` と実行したときに、下記のようなnpmスクリプト処理が走るようにする。
1. `clean` ： build ディレクトリがあれば削除する
2. `tsc` : src ディレクトリ内の TS コードをトランスパイルしてディレクトリへ出力する

## 必要npmパッケージインストール
```shell
# npm install --save rimraf npm-run-all
```
`rimraf` ： ディレクトリの削除用コマンド<br>
`npm-run-all` ： NPMコマンドの逐次実行

## package.json へのビルド用スクリプト設定
```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rimraf dist",     /*←追記*/
    "tsc": "tsc",               /*←追記*/
    "build": "npm-run-all clean tsc"    /*←追記*/
  },
  ...
```
これらのnpmスクリプトは単独実行も可能。（`npm run clean`）

### 設定の説明
https://maku.blog/p/3eccb2t/#%E5%BF%9C%E7%94%A8%E3%83%93%E3%83%AB%E3%83%89%E7%94%A8%E3%81%AE-npm-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%99%E3%82%8B
### 設定例
https://qiita.com/reflet/items/538753d5dcf3560567a9#%E5%88%9D%E6%9C%9F%E5%8C%96npm

# typescript,コンパイラインストール
```shell
# npm install --save ts-node typescript
# ls
dist  node_modules  package-lock.json  package.json  src
```
node_modulesは配布する必要はない。<br>
package.json を見ると、項目が追加されている。<br>
また、 package-lock.json という環境を構築したときの全ライブラリのバージョン情報が入ったファイルも生成される。<br>
このファイルを手で修正することはありません。

# tsconfig.json の作成
```shell
# npx tsc --init
message TS6071: Successfully created a tsconfig.json file.
# ls
dist  node_modules  package-lock.json  package.json  src  tsconfig.json
```
何も設定せずとも、TypeScriptのコンパイルは可能だが、入力フォルダを設定したい、出力形式を調整したい、いくつかのデフォルトでオフになっている新しい機能を使いたいなどの場合は設定ファイル tsconfig.json を作成する。

# tsconfig.json の設定
```json
{
  "compilerOptions": {
    "target": "ES2019",     /*←追記*/
    "module": "commonjs",
    "sourceMap": true,      /*←追記*/
    "outDir": "./dist",         /*←追記*/
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
      "src/**/*"
  ]
}
```
`target` ：JavaScript に変換するときにどの ECMAScript バージョンに準拠したコードで出力するかを指定。<br>
`outDir` ：出力先のディレクトリをプロジェクトルート（tsconfig.jsonのディレクトリ）からのパスで指定。<br>
`include:[]` ：変換対象とするファイルを指定。本例では`src`以下すべてのファイルが対象。<br>

## 設定の説明
https://maku.blog/p/27m3brm/
## 設定例
https://qiita.com/reflet/items/538753d5dcf3560567a9


# memo

以下見ながらdockerfileに落とし込む

https://future-architect.github.io/typescript-guide/deploy.html#docker

https://future-architect.github.io/typescript-guide/ecosystem.html