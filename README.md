# passkey-gen-ts
入力をUTFエンコードし、sha-256ハッシュ関数を通し、HEX文字列にする<br>
typescriptを用いてweb上で動作する。

## ディレクトリ構成
```shell
passkey-gen-ts
├── dist
│   ├── compute_hash.js
│   └── main.js
├── html
│   └── index.html
├── ts
│   ├── compute_hash.ts
│   └── main.ts
├── Dockerfile
├── memo.md
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

# 環境構築
## イメージビルド
```
docker build -t passkey-gen-ts .
```

## コンテナ起動
```
# docker run -itd -p 8004:80 --name passkey-gen-ts passkey-gen-ts
```