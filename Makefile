test-install:
	npm install jasmine-node -g

install:
	# XXX should this be a noop?
	npm install twilio

test:
	jasmine-node spec
