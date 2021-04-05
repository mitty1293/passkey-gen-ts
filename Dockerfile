# builder
FROM node:15.13-buster-slim AS builder
WORKDIR app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY ts/ ./ts/
COPY dist/ ./dist/
RUN npm run build

# runner
FROM httpd:2.4 AS runner
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/dist/
COPY html/index.html /usr/local/apache2/htdocs/
COPY main.js /usr/local/apache2/htdocs/dist/
EXPOSE 80