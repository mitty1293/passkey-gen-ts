# passkey-gen-ts
入力をUTFエンコードし、sha-256ハッシュ関数を通し、HEX文字列にする。<br>
typescriptを用いてweb上で動作する。<br>
sh256を理解する学習目的。
## Self hosting(via traefik)
Replace the value of DOMAIN with the domain.
```
# Copy .env_example as .env
cp .env_example .env
vi .env
```
```
# Replace the value of DOMAIN in .env
DOMAIN=example.com
```
Start the container.
```
docker network create traefik_reverse_proxy_network
docker compose -f compose.traefik.yml up -d
```
Go to `https://passkey.${DOMAIN}`.
## Self hosting(Standalone)
```
docker build -t passkey-gen-ts ./passkey-gen-ts/
docker run -itd -p <hostport>:80 --name passkey-gen-ts passkey-gen-ts
```
Go to `http://host-ip:host-port`.
## References
https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf<br>
https://zenn.dev/kota_yata/articles/ce45080b2e8cae
