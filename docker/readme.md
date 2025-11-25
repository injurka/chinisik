docker tag chinisik-client:v8 injurka/chinisik-client:v8
docker push injurka/chinisik-client:v8

docker tag chinisik-server:v7 injurka/chinisik-server:v7
docker push injurka/chinisik-server:v7

---

./docker/build_client.sh v8
./docker/build_server.sh v7

---

docker compose down

V_CLIENT=v8 V_SERVER=v7 docker compose up -d
