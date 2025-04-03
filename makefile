run: 
	bundle exec jekyll serve

docker-build:
	docker-compose build

docker-up:
	docker-compose up

docker-down:
	docker-compose down

docker-prune:
	docker system prune -f
	docker volume prune -f