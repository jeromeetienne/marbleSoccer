# makefile to automatize simple operations

server:
	python -m SimpleHTTPServer

#################################################################################
#		deploy								#
#################################################################################

deploy:	build deployGhPage

deployGhPage:
	(cd ../notes.jetienne.com.gh-pages && git pull origin gh-pages)
	(cd ../notes.jetienne.com.gh-pages && cp -a ../notes.jetienne.com/_site/* .)
	(cd ../notes.jetienne.com.gh-pages && git add .)
	(cd ../notes.jetienne.com.gh-pages && git commit -a -m 'new deployment')
	(cd ../notes.jetienne.com.gh-pages && git push origin gh-pages)

#git clone git@github.com:jeromeetienne/marbleGame.git
#cd marbleGame
#git checkout -b gh-pages origin/gh-pages
#git pull
#cp -R ~/webwork/marbleGame/* .
#git add .
#git add -u
