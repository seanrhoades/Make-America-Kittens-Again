// mapa.js - part of make america puppies again
// by Tom Royal
// tomroyal.com
// modified puppies instead of kittens by Sean Rhoades
// www.seanrhoades.com

// If you use this code, please host your own copy of the images - thanks!

var thePuppies = {"puppy": [
    {"file": "1.jpg", "Credit": "sindykids", "URL": "https://www.flickr.com/photos/sindykids/4492932685/", "type":"0"},
	{"file": "2.jpg", "Credit": "nikkipea", "URL": "https://www.flickr.com/photos/nikkipea/8409572288/", "type":"0"},
	{"file": "3.jpg", "Credit": "tanjica", "URL": "https://www.flickr.com/photos/tanjica/3009461815/", "type":"0"},
	{"file": "4.jpg", "Credit": "melzen", "URL": "https://www.flickr.com/photos/melzen/8588849175/", "type":"0"},
	{"file": "5.jpg", "Credit": "mayls", "URL": "https://www.flickr.com/photos/mayls/4061222973/", "type":"0"},
	{"file": "6.jpg", "Credit": "pet_portrait", "URL": "https://www.flickr.com/photos/pet_portrait/8067987318/", "type":"0"},
	{"file": "7.jpg", "Credit": "snemazie", "URL": "https://www.flickr.com/photos/snemazie/4304175497/", "type":"0"},
	{"file": "8.jpg", "Credit": "86382030@N02", "URL": "https://www.flickr.com/photos/86382030@N02/7913660232/", "type":"0"},
	{"file": "9.jpg", "Credit": "deadbettysdiner", "URL": "https://www.flickr.com/photos/deadbettysdiner/8257115912/", "type":"0"},
	{"file": "10.jpg", "Credit": "christiewillis", "URL": "https://www.flickr.com/photos/christinewillis/9215070083/", "type":"0"},
	{"file": "11.jpg", "Credit": "larisadeac", "URL": "https://www.flickr.com/photos/larisadeac/9151095438/", "type":"0"},
	{"file": "12.jpg", "Credit": "eearunramkumar", "URL": "https://www.flickr.com/photos/eearunramkumar/7548254318/", "type":"0"},
	{"file": "13.jpg", "Credit": "20207062@N08", "URL": "https://www.flickr.com/photos/20207062@N08/8124824873", "type":"0"},
	{"file": "14.jpg", "Credit": "22764581@N05", "URL": "https://www.flickr.com/photos/22764581@N05/5701840450/", "type":"0"},
	{"file": "15.jpg", "Credit": "14789407@N03", "URL": "https://www.flickr.com/photos/14789407@N03/2174228262", "type":"0"},
	{"file": "16.jpg", "Credit": "63535837@N06", "URL": "https://www.flickr.com/photos/63535837@N06/5924491216/", "type":"0"},
	{"file": "17.jpg", "Credit": "ayshi", "URL": "https://www.flickr.com/photos/ayshi/3592507386/", "type":"0"},
	{"file": "18.jpg", "Credit": "spangles44", "URL": "https://www.flickr.com/photos/spangles44/15058319583/", "type":"0"},
	{"file": "19.jpg", "Credit": "mzahra1", "URL": "https://www.flickr.com/photos/mzahra1/2854279023", "type":"0"},
	{"file": "20.jpg", "Credit": "48190403@N06", "URL": "https://www.flickr.com/photos/48190403@N06/8034695988/", "type":"0"},
	{"file": "21.jpg", "Credit": "95044690@N06", "URL": "https://www.flickr.com/photos/95044690@N06/8720792780/", "type":"0"},
	{"file": "22.jpg", "Credit": "mayj", "URL": "https://www.flickr.com/photos/mayj/2573579017/", "type":"0"},
	{"file": "23.jpg", "Credit": "amytheabattoir", "URL": "https://www.flickr.com/photos/amytheabattoir/2776467500/", "type":"0"},
	{"file": "24.jpg", "Credit": "135738185@N06", "URL": "https://www.flickr.com/photos/135738185@N06/22482191888/", "type":"0"},
	{"file": "25.jpg", "Credit": "127564271@N04", "URL": "https://www.flickr.com/photos/127564271@N04/16231589971/", "type":"0"},
	{"file": "26.jpg", "Credit": "crazymandi", "URL": "https://www.flickr.com/photos/crazymandi/8165497065/", "type":"0"},
	{"file": "27.jpg", "Credit": "_minicubics_", "URL": "https://www.flickr.com/photos/_minicubics_/5342853821/", "type":"0"},
	{"file": "28.jpg", "Credit": "dawniverson", "URL": "https://www.flickr.com/photos/dawniverson/5441941084/", "type":"0"},
	{"file": "29.jpg", "Credit": "tachikoma76", "URL": "https://www.flickr.com/photos/tachikoma76/3767149752/", "type":"0"},
	{"file": "30.jpg", "Credit": "parismadrid", "URL": "https://www.flickr.com/photos/parismadrid/2385191991/", "type":"0"},
	{"file": "31.jpg", "Credit": "laurenypie", "URL": "https://www.flickr.com/photos/laurenypie/6178537627/", "type":"0"},
	{"file": "32.jpg", "Credit": "Mami Terai", "URL": "https://www.flickr.com/photos/hunden/8545183695/", "type":"0"},
	{"file": "33.jpg", "Credit": "Sam Scheibel", "URL": "https://www.flickr.com/photos/8027240@N08/14137571712/", "type":"0"}
    ]
};

function mapanow(thePuppies){

	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with puppies
	var pagepics=document.getElementsByTagName("img"), i=0, img;
	var blacklist = ["trump"];
	while (img = pagepics[i++])
	{
		blacklist.forEach(function(blist) {
			var alttext = String(img.alt);
			alttext = alttext.toLowerCase();
			var imgsrc = String(img.src);
			imgsrc = imgsrc.toLowerCase();
			if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1)){
				var randk = Math.floor(Math.random() * 32) + 1
				img.src = 'http://s3.amazonaws.com/mapapics/'+thePuppies.puppy[randk].file+'';
				if (thePuppies.puppy[randk].type == 0){
					img.alt = 'Photo by '+thePuppies.puppy[randk].Credit+' source '+thePuppies.puppy[randk].URL+'';
				}
				else {
					img.alt = 'Photo by '+thePuppies.puppy[randk].Credit+'';
				};
			};
		});
	}
};

// add listener
document.addEventListener('DOMContentLoaded', mapanow(thePuppies), false);
