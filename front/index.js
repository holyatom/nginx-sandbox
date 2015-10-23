import config from 'config';
import express from 'express';


class Server {
  constructor () {
    this.app = express();
  }

  preRouteMiddleware () {

  }

  postRouteMiddleware () {
    this.app.use((req, res, next) => res.json({ message: 'not_found' }));
  }

  run () {
    this.app.set('port', config.front.port);

    this.app.get('*', (req, res, next) => res.sendFile(`${__dirname}/public/index.html`));

    this.app.listen(config.front.port, config.front.ip, () => {
      console.log(`front running on ${config.front.ip}:${config.front.port}`);
    });
  }
}

export default new Server();
