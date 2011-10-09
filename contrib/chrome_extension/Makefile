# just a little makefile to store repreatitive task

#################################################################################
#		marblesoccer								#
#################################################################################

build:
	zip -r marblesoccer.zip marblesoccer_src
	
build_crx:
	google-chrome --pack-extension=marblesoccer_src --pack-extension-key=$(HOME)/.chrome_extension_key.pem
	
clean:
	rm -rf marblesoccer.zip marblesoccer_src.crx
