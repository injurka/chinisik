docker tag chinisik-client:v4 injurka/chinisik-client:v4
docker push injurka/chinisik-client:v4

docker tag chinisik-server:v3 injurka/chinisik-server:v3
docker push injurka/chinisik-server:v3

---

./docker/build_server.sh v3
./docker/build_client.sh v4

---

docker compose down

V_CLIENT=v3 V_SERVER=v3 docker compose up -d
