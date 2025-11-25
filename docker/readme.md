"docker tag chinisik-client:v9 injurka/chinisik-client:v9
docker push injurka/chinisik-client:v9

docker tag chinisik-server:v7 injurka/chinisik-server:v7
docker push injurka/chinisik-server:v7

---

./docker/build_client.sh v9
./docker/build_server.sh v7

---

docker compose down

V_CLIENT=v9 V_SERVER=v7 docker compose up -d
"
