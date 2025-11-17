docker tag chinisik-client:v3 injurka/chinisik-client:v3
docker push injurka/chinisik-client:v3

docker tag chinisik-server:v3 injurka/chinisik-server:v3
docker push injurka/chinisik-server:v3

---

./docker/build_server.sh v3
./docker/build_client.sh v3

---

docker compose down

V_CLIENT=v2 V_SERVER=v2 docker compose up -d
