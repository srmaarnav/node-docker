docker run -d -p $1:8088 -v hello-world-volume:/app/uploads --network node_network --restart unless-stopped --env-file .env sharmaarnav/hello-world-app:v4
