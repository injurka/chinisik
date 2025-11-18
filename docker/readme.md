docker tag chinisik-client:v5 injurka/chinisik-client:v5
docker push injurka/chinisik-client:v5

docker tag chinisik-server:v6 injurka/chinisik-server:v6
docker push injurka/chinisik-server:v6

---

./docker/build_server.sh v6
./docker/build_client.sh v5

---

docker compose down

V_CLIENT=v5 V_SERVER=v6 docker compose up -d
