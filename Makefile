# makefile to automatize simple operations

server:
	python -m SimpleHTTPServer

deploy:
	# assume there is something to commit
	git commit -a -m "New deploy" && git push -f origin HEAD:gh-pages && git reset HEAD~

