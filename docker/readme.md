docker tag chinisik-client:v2 injurka/chinisik-client:v2
docker push injurka/chinisik-client:v2

docker tag chinisik-server:v2 injurka/chinisik-server:v2
docker push injurka/chinisik-server:v2

---

./docker/build_server.sh v2
./docker/build_client.sh v2

---

docker compose down

V_CLIENT=v2 V_SERVER=v2 docker compose up -d
