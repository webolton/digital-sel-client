export SHELL := /bin/bash

.PHONY: lint

lint-all:
	eslint "src/**/*" --fix
