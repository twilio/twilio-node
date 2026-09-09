.PHONY: githooks test-install install test test-docker docs clean prettier

githooks:
	ln -sf ../../githooks/pre-commit .git/hooks/pre-commit

test-install:
	npm install --only=dev

install: githooks
	@node --version || (echo "Node is not installed, please install Node >= 14"; exit 1);
	rm -f package-lock.json
	npm install

test:
	npm test

test-docker:
	docker build -t twilio/twilio-node .
	docker run twilio/twilio-node npm run ci

docs:
	npm run typedoc

clean:
	rm -rf node_modules lib

prettier:
	npm run prettier

API_DEFINITIONS_SHA=$(shell git log --oneline | grep Regenerated | head -n1 | cut -d ' ' -f 5)
CURRENT_TAG=$(shell expr "${GITHUB_TAG}" : ".*-rc.*" >/dev/null && echo "rc" || echo "latest")
docker-build:
	docker build -t twilio/twilio-node .
	docker tag twilio/twilio-node twilio/twilio-node:${GITHUB_TAG}
	docker tag twilio/twilio-node twilio/twilio-node:apidefs-${API_DEFINITIONS_SHA}
	docker tag twilio/twilio-node twilio/twilio-node:${CURRENT_TAG}

docker-push:
	docker push twilio/twilio-node:${GITHUB_TAG}
	docker push twilio/twilio-node:apidefs-${API_DEFINITIONS_SHA}
	docker push twilio/twilio-node:${CURRENT_TAG}
