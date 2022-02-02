build:
	npm run build
	rsync -ad public/build/ docs/build/

serve:
	python -m http.server -b 0.0.0.0 -d docs/ 5000

test:
	npm run check
