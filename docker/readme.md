docker tag chinisik-client:v11 injurka/chinisik-client:v11
docker push injurka/chinisik-client:v11

docker tag chinisik-server:v9 injurka/chinisik-server:v9
docker push injurka/chinisik-server:v9

---

./docker/build_client.sh v11
./docker/build_server.sh v9

---

docker compose down

V_CLIENT=v11 V_SERVER=v9 docker compose up -d
