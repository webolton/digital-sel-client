export SHELL := /bin/bash

# Development tasks
.PHONY: run-dev
run-dev:
	npm start

.PHONY: lint
lint-all:
	eslint "src/**/*" --fix
