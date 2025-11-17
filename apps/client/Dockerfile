# ---- Build ------------ #
FROM node:24-bullseye-slim AS dist

WORKDIR /opt/app

COPY . .

RUN apt-get update && apt-get install -y ca-certificates

RUN npm install bun -g
RUN bun install --ignore-scripts

RUN npm run prepare
RUN npm run typecheck
RUN npm run lint
RUN npm run build

# ---- Release ---------- #
FROM gcr.io/distroless/nodejs24-debian12

WORKDIR /opt/app

COPY --from=dist /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=dist /opt/app/.output .output
COPY --from=dist /opt/app/public public

ENV HOST=0.0.0.0

CMD [ ".output/server/index.mjs" ]
