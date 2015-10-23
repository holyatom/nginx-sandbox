# Nginx Sandbox
Sandbox to learn nginx


## Run

First you need to install nginx. See http://nginx.org/en/docs/install.html

After that try nginx guide http://nginx.org/en/docs/beginners_guide.html

When you ready let's start. Firstly get `nginx.conf` from repo and copy it to you conf file


In hosts file add aliases to your localhost

`echo "127.0.0.1 nginx-sandbox.dev" >> /private/etc/hosts` (MacOS)

`echo "127.0.0.1 nginx-sandbox.dev" >> /etc/hosts` (Linux)

and for staging

`echo "127.0.0.1 staging.nginx-sandbox.dev" >> /private/etc/hosts` (MacOS)

`echo "127.0.0.1 staging.nginx-sandbox.dev" >> /etc/hosts` (Linux)


Run both staging and production applications

`gulp staging` - run api and front in staging
`gulp production` - run api and front in production

Reload your nginx server

Check `nginx-sandbox.dev` should retrun html `Glad to see you` (production mode) and `nginx-sandbox.me/api/hello` should return `{ message: 'glad to see you' }`

And `staging.nginx-sandbox.dev` will return `Hello world` (staging mode) same in `staging.nginx-sandbox.me/api/hello`
