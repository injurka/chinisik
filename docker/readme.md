docker tag chinisik-client:v6 injurka/chinisik-client:v6
docker push injurka/chinisik-client:v6

docker tag chinisik-server:v6 injurka/chinisik-server:v6
docker push injurka/chinisik-server:v6

---

./docker/build_server.sh v6
./docker/build_client.sh v6

---

docker compose down

V_CLIENT=v6 V_SERVER=v6 docker compose up -d
