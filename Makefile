export SHELL := /bin/bash

# Development tasks
.PHONY: run
run:
	npm start

.PHONY: lint
lint:
	eslint "src/**/*" --fix

.PHONY: test
test:
	npm run test -- --coverage

.PHONY: test-u
test-u:
	npm test -- -u
