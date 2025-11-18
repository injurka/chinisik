# ---- Node modules production ----- #
FROM oven/bun:1.3.2-slim AS node_modules_prod

WORKDIR /opt/app

COPY ./package*.json ./bun* ./

RUN bun install --production --ignore-scripts --frozen-lockfile

# ---- Build ------------ #
FROM oven/bun:1.3.2 AS dist

WORKDIR /opt/app

COPY . .

# Install Tesseract and OpenSSL runtime dependencies
RUN apt-get update && apt-get install -y tesseract-ocr openssl && rm -rf /var/lib/apt/lists/*

RUN bun install --ignore-scripts
RUN bun run lint
RUN bun run build

# ---- Release ---------- #
FROM oven/bun:1.3.2-slim

ARG CI_COMMIT_TAG

WORKDIR /opt/app

COPY ./package*.json ./bun* ./

RUN bun install --production --ignore-scripts --frozen-lockfile

COPY --from=node_modules_prod /opt/app/node_modules node_modules
COPY --from=dist              /opt/app/dist         dist
COPY                          ./prisma              prisma
COPY                          chi_sim.traineddata   .
# Подключается через `-v /путь/к/вашей/static/папке:/opt/app/static`
# COPY ./static                 static

RUN bun run prisma generate

ENV HOST=0.0.0.0
CMD ["dist/main.js"]
