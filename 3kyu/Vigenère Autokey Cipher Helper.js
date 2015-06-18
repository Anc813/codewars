function VigenèreAutokeyCipher(key, abc) {
  this.encode = function (str) {
  	var current_key = key;
  	var skipped = 0;
  	var result = '';

  	for(var i=0; i<str.length; i++) {
  		var e = str[i];
     	if (!~abc.indexOf(e)) {
    		skipped++;
    		result += e;
    	} else {
    		result += abc[(abc.indexOf(e) + abc.indexOf(current_key[i - skipped])) % abc.length];
    		current_key += e;
    	}
  	}

  	return result;
  };

  this.decode = function (str) {
  	var current_key = key;
  	var skipped = 0;
  	var result = '';

  	for(var i=0; i<str.length; i++) {
  		var e = str[i];
     	if (!~abc.indexOf(e)) {
    		skipped++;
    		result += e;
    	} else {
    		s =  abc[(abc.indexOf(e) - abc.indexOf(current_key[i - skipped]) +  abc.length) % abc.length];
    		result += s;
    		current_key += s;
    	}
  	}

  	return result;
  };
}
