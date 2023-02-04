# builder
FROM node:19.6.0-bullseye-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY ts/ ./ts/
COPY dist/ ./dist/
RUN npm run build

# runner
FROM httpd:2.4.55 AS runner
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/dist/
COPY html/index.html /usr/local/apache2/htdocs/
COPY html/base.css /usr/local/apache2/htdocs/