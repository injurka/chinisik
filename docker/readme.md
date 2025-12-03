docker tag chinisik-client:v10 injurka/chinisik-client:v10
docker push injurka/chinisik-client:v10

docker tag chinisik-server:v8 injurka/chinisik-server:v8
docker push injurka/chinisik-server:v8

---

./docker/build_client.sh v10
./docker/build_server.sh v8

---

docker compose down

V_CLIENT=v10 V_SERVER=v8 docker compose up -d
