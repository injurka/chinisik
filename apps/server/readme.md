# Backend service for Chinisik

## Local Development

> Required dependencies

- `deno` is used to install packages and for runtime environment

> Run project

- `deno install` installing dependencies
- `deno run dev` starting development mode

```md
✨ default server listening on the port 8080

🌱 REST endpoints
http://localhost:8000/api
```

### In order for everything to work correctly, the PostgreSQL database must be up and running.

> inline .env

```bash
docker run -p 5432:5432 \
  --name chinisik-bd \
  -e POSTGRES_PASSWORD=chinisik \
  -e POSTGRES_USER=chinisik \
  -e POSTGRES_DB=chinisik_dev \
  -d \
  --restart always \
  postgres:latest
```

> file .env

```bash
docker run -p 8080:8080 \
  --name chinisik-back \
  --env-file .env \
  -v /root/sources/chinisik-back/static:/opt/app/static \
  -d \
  --restart always \
  chinisik-back:v24
```

After launching, perform migrations and seeding of all data, this can be done by writing:

- `bun run prisma:reset`

## Build image and run

### Build

```
docker buildx build -t chinisik-back .
```

### Run

```
docker run -d \
  --name chinisik-back \
  -p 8080:8080 \
  --env-file .env \
  chinisik-back
```
