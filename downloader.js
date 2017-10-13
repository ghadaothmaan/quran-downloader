
var http = require('http');
var fs = require('fs');

// Download one track & write to file 
// FIXME: seprate write to file from download
function downloadTrack(trackNumber) {
  // 1.
  var nameZeored = addZero(trackNumber);
  var url = "http://server8.mp3quran.net/frs_a/" + nameZeored + ".mp3"; 
  console.log('url: ' + url);

  // 2.
  http.get(url, response => {
    // 3.
    var fileName = generateNameFromTrackNumber(nameZeored);
    var file = fs.createWriteStream(fileName);
    console.log('file name: ' + fileName);
    
    // 4.
    response.pipe(file);
    console.log('Download complete. File name: ' + fileName);
    console.log('================');
  });
}

// Download all files
for(var i = 90; i <= 114; i++) {
  downloadTrack(i + "");
}


// Utilities
// TODO: Add surah name.
function generateNameFromTrackNumber(trackNumber) {
  var name = "";
  name = trackNumber + ".mp3";
  return name;
}

function addZero(number) {
  var zeored = "";

  if(number.length === 2) {
    zeored = "0" + number;
  } 
  else if(number.length === 1) {
    zeored = "00" + number;
  }
  else {
    zeored = number;
  }

  return zeored;
}


// var file = fs.createWriteStream("099.mp3");
// var request = http.get("http://server8.mp3quran.net/frs_a/099.mp3", function(response) {
//   response.pipe(file);
// })
