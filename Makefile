dev:
	npm run dev

build:
	rm -rf docs
	npm run build
	mv public docs

test:
	npm run check
