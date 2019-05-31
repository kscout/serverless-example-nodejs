.PHONY: docker docker-run

DOCKER_TAG ?= knative-scout/serverless-example-nodejs:latest

# build docker image
docker:
	docker build -t "${DOCKER_TAG}" .

# run docker image
docker-run:
	docker run -it --rm --net host "${DOCKER_TAG}"
