
### Docker Commands

- check any docker process running

```
docker ps
```

- build your image

```
docker build -t pushp1992/web-scrapper-frontend:ui .
```

- Run your image locally

```
docker run -d -p 8085:8085 pushp1992/web-scrapper-frontend:ui
```

- Push your image to remote

```
 docker push pushp1992/web-scrapper-frontend:ui
```