.PHONY: docker docker-run

DOCKER_TAG ?= kscout/serverless-example-nodejs:latest

# build docker image
docker:
	docker build -t "${DOCKER_TAG}" .

# run docker image
docker-run:
	docker run -it --rm --net host "${DOCKER_TAG}"

# push docker image
docker-push:
	docker push "${DOCKER_TAG}"
