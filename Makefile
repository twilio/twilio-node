test-install:
	npm install --only=dev

install:
	npm install

test:
	npm test

clean: node_modules
	rm -rf node_modules
