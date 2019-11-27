# Sequelize CLI

## Migration

Criação

	yarn sequelize migration:create --name=<nome da migration>

Execução

	yarn sequelize db:migrate

Desfazer

	yarn sequelize db:migrate:undo
	            ou
	yarn sequelize db:migrate:undo:all
				ou
	yarn sequelize db:migrate:undo:all --to <nome do arquivo de migration>.js


## Seed

Criação

	yarn sequelize seed:generate --name <nome da seed>

Execução

	yarn sequelize db:seed

Desfazer

	yarn sequelize db:seed:undo
				ou
	yarn sequelize db:seed:undo:all
				ou
	yarn sequelize db:seed:undo --seed <nome do arquivo de seed>