# forsen-bingo-backend

Backend for [forsen-bingo](https://github.com/DaCurse/forsen-bingo), used to collect data about which squares are clicked the most.

## Deploying

Building an image from this repository:

```sh
docker build https://github.com/DaCurse/forsen-bingo-server.git -t forsen-bingo:latest
```

Running in a container:

```sh
# Making sure to mount SSL certs and db directories to the ones defined in Dockerfile
docker run -d \
  -it \
  --restart unless-stopped \
  --name forsen-bingo -p 443:443 \
  --mount type=bind,source=/var/forsen-bingo,target=/db \
  --mount type=bind,source=/etc/letsencrypt/live/forsenbingo.tk,target=/ssl/live/forsenbingo.tk \
  --mount type=bind,source=/etc/letsencrypt/archive/forsenbingo.tk/,target=/ssl/archive/forsenbingo.tk/ \
  forsen-bingo:latest
```
