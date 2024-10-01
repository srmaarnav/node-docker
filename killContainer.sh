id=$(docker ps -q)
docker stop $id
docker rm $id
