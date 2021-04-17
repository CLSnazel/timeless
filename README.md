# timeless

### server
```sh
$ cd server
$ cp .envrc.example .envrc
$ npm i
$ docker-compose up -d
$ npm run migrate up
$ npm run dev
```

### client
```sh
$ cd client
$ cp .env.example .env
$ yarn install && yarn start
```
