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