test:
	yarn parcel build index.js --target node
	node dist/index.js

.PHONY: test
