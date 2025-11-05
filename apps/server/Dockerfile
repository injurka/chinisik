# ---- Node modules ----- #
FROM oven/bun AS node_modules

WORKDIR /opt/app

COPY ./package*.json ./bun* ./

RUN bun install --ignore-scripts

# ---- Node modules production ----- #
FROM oven/bun AS node_modules_prod

WORKDIR /opt/app

COPY ./package*.json ./bun* ./
COPY ./prisma        prisma

RUN bun install --production --ignore-scripts
RUN bun run prisma:generate

# ---- Build ------------ #
FROM oven/bun AS dist

WORKDIR /opt/app

COPY --from=node_modules /opt/app/node_modules node_modules
COPY                     .                     .

RUN bun run lint
RUN bun run build

# ---- Release ---------- #
FROM oven/bun:slim

ARG CI_COMMIT_TAG

WORKDIR /opt/app

COPY --from=node_modules_prod /opt/app/node_modules node_modules
COPY --from=dist              /opt/app/dist         dist
COPY                          data                  data
# Подключается через `-v /путь/к/вашей/static/папке:/opt/app/static`
# COPY ./static                 static

ENV CI_COMMIT_TAG=$CI_COMMIT_TAG
ENV HOST=0.0.0.0
CMD ["dist/main.js"]
