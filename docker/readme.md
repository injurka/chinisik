docker tag chinisik-client:v20 injurka/chinisik-client:v20
docker push injurka/chinisik-client:v20

docker tag chinisik-server:v17 injurka/chinisik-server:v17
docker push injurka/chinisik-server:v17

---

./docker/build_client.sh v20
./docker/build_server.sh v17

---

docker compose down

V_CLIENT=v20 V_SERVER=v17 docker compose up -d
