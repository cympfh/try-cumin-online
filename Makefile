dev:
	npm run dev

build:
	npm run build
	rm -rf docs
	cp -R public docs

test:
	npm run check
