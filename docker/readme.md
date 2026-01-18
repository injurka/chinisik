docker tag chinisik-client:v13 injurka/chinisik-client:v13
docker push injurka/chinisik-client:v13

docker tag chinisik-server:v12 injurka/chinisik-server:v12
docker push injurka/chinisik-server:v12

---

./docker/build_client.sh v13
./docker/build_server.sh v12

---

docker compose down

V_CLIENT=v13 V_SERVER=v12 docker compose up -d
