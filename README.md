# forsen-bingo-backend

Backend for [forsen-bingo](https://github.com/DaCurse/forsen-bingo), used to collect data about which squares are clicked the most.
This one doesn't use HTTPS at all, if you want to put it behind a reverse-proxy, for example.

## Deploying

Building an image from this repository:

```sh
docker build https://github.com/DaCurse/forsen-bingo-server.git -t forsen-bingo:latest
```

Running in a container:

```sh
# Making sure to mount the data directory to the one defined in Dockerfile
docker run -d \
  -it \
  --restart unless-stopped \
  --name forsen-bingo -p 80 \
  --mount type=bind,source=/var/lib/forsen-bingo/data,target=/data \
  forsen-bingo:latest
```
