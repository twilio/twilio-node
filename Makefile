test-install:
	npm install --only=dev

install:
	@node --version || (echo "Node is not installed, please install Node >= 0.12"; exit 1);
	npm install

test:
	npm test

clean: node_modules
	rm -rf node_modules
