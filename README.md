# passkey-gen-ts
入力をUTFエンコードし、sha-256ハッシュ関数を通し、HEX文字列にする。<br>
typescriptを用いてweb上で動作する。<br>
sh256を理解する学習目的。

## Setup
```
$ docker build -t passkey-gen-ts .
$ docker run -itd -p hostport:80 --name passkey-gen-ts passkey-gen-ts
```

## References
https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
https://zenn.dev/kota_yata/articles/ce45080b2e8cae
