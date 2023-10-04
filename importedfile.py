def this():	
	import os,json
	Path={}
	type ='.mp'
	#path="/storage/emulated/0/download/python"
#	filePath="/storage/extSdCard/pythom/MusicPlayerWithFlask/SongList.json"	
#	defeaultPath='/storage/emulated/0/Download/'	
#	p3='/storage/extSdCard/'
#	np=p3+'pythom/MusicPlayerWithFlask/static'
	bp='static'	
	for files in os.listdir(bp):
		if type in files:
					
			Path[files]=bp+'/'+files
		else:
				pass
	#search(p3)
	#search(defeaultPath)
	#search(np)
	return Path
