docker tag chinisik-client:v4 injurka/chinisik-client:v4
docker push injurka/chinisik-client:v4

docker tag chinisik-server:v4 injurka/chinisik-server:v4
docker push injurka/chinisik-server:v4

---

./docker/build_server.sh v5
./docker/build_client.sh v4

---

docker compose down

V_CLIENT=v3 V_SERVER=v3 docker compose up -d
