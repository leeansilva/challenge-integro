# Laravel Backend con PostgreSQL

## Requisitos
- Docker
- Composer
- PHP 8.2

## Instrucciones

### Inicializar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/leeansilva/challenge-integro.git
   cd challenge-integro

2. Configurar **.env**:
	 ```bash
	APP_NAME=Laravel
	APP_ENV=local
	APP_KEY=base64:OVxHqoCDwQ9YLZ3Mk6gUFANgSPvhWnPmx5ZFGHp+pks=
	APP_DEBUG=true
	APP_TIMEZONE=UTC
	APP_URL=http://localhost

	APP_LOCALE=en
	APP_FALLBACK_LOCALE=en
	APP_FAKER_LOCALE=en_US

	APP_MAINTENANCE_DRIVER=file
	# APP_MAINTENANCE_STORE=database

	PHP_CLI_SERVER_WORKERS=4

	BCRYPT_ROUNDS=12

	LOG_CHANNEL=stack
	LOG_STACK=single
	LOG_DEPRECATIONS_CHANNEL=null
	LOG_LEVEL=debug

	DB_CONNECTION=pgsql
	DB_HOST=localhost
	DB_PORT=5432
	DB_DATABASE=laravel_db
	DB_USERNAME=postgres
	DB_PASSWORD=postgres

	SESSION_DRIVER=database
	SESSION_LIFETIME=120
	SESSION_ENCRYPT=false
	SESSION_PATH=/
	SESSION_DOMAIN=null

	BROADCAST_CONNECTION=log
	FILESYSTEM_DISK=local
	QUEUE_CONNECTION=database

	CACHE_STORE=database
	CACHE_PREFIX=

	MEMCACHED_HOST=127.0.0.1

	REDIS_CLIENT=phpredis
	REDIS_HOST=127.0.0.1
	REDIS_PASSWORD=null
	REDIS_PORT=6379

	MAIL_MAILER=log
	MAIL_HOST=127.0.0.1
	MAIL_PORT=2525
	MAIL_USERNAME=null
	MAIL_PASSWORD=null
	MAIL_ENCRYPTION=null
	MAIL_FROM_ADDRESS="hello@example.com"
	MAIL_FROM_NAME="${APP_NAME}"

	AWS_ACCESS_KEY_ID=
	AWS_SECRET_ACCESS_KEY=
	AWS_DEFAULT_REGION=us-east-1
	AWS_BUCKET=
	AWS_USE_PATH_STYLE_ENDPOINT=false

	VITE_APP_NAME="${APP_NAME}"

3. Levantar Docker:
	```bash
	docker-compose up -d
4. Ejecutar migraciones:
	```bash
	php artisan migrate
5. Iniciar servidor:
	```bash
	php artisan serve

### Endpoints

-   `GET /api/clientes` - Lista de clientes.
-   `POST /api/clientes` - Crear cliente.
-   `PUT /api/clientes/{id}` - Actualizar cliente.
-   `DELETE /api/clientes/{id}` - Eliminar cliente.

