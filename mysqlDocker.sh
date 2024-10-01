docker run -d --name my_mysql \
  --network node_network \
  -e MYSQL_ROOT_PASSWORD=Root@1234 \
  -e MYSQL_DATABASE=my_database \
  -p 6556:3306 \
  mysql:8.0
