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
	DB_CONNECTION=pgsql
	DB_HOST=localhost
	DB_PORT=5432
	DB_DATABASE=laravel_db
	DB_USERNAME=postgres
	DB_PASSWORD=postgres
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

