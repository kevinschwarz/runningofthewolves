import glob

tags = ''
for filename in glob.iglob('*.jpg'):
     tags = tags + '<a href="/assets/img/2016-race-photos/{0}" data-lightbox="runningofthewolves"><img src="/assets/img/2016-race-photos/thumbnails/{0}" /></a>\n'.format(filename)
   
with open('images.html', 'w') as f:
    f.write(tags)


# Prep the images with imagemagik
# mogrify -auto-orient -scale 15% *.jpg
# mogrify -auto-orient -path thumbnails -thumbnail 150x150 *.jpg