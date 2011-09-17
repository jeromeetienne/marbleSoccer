# makefile to automatize simple operations

server:
	python -m SimpleHTTPServer

deploy:
	git diff --quiet HEAD || git commit -a -m "New deploy" && git push -f origin HEAD:gh-pages && git reset HEAD~
	git diff --quiet HEAD && git push -f origin HEAD:gh-pages

