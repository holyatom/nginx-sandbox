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
    this.app.set('port', config.api.port);

    this.preRouteMiddleware();
    this.app.get('/api/hello', (req, res, next) => res.json({ message: 'hello world' }));
    this.postRouteMiddleware();

    this.app.listen(config.api.port, config.api.ip, () => {
      console.log(`api running on ${config.api.ip}:${config.api.port}`);
    });
  }
}

export default new Server();
