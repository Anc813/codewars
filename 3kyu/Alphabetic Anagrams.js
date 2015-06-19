function listPosition (word) {
	function factorial(n) {
	  return (n > 1) ? n * factorial(n - 1) : 1;
	}

	function unique (word) {
		return word.split('').filter(function (e, i, a) {
			return a.indexOf(e) === i;
		}).sort();
	}

	function combinations (word) {
		// calc permutations
		return unique(word).reduce(function (prev, e) {
			return prev / factorial(word.split(e).length - 1)
		}, factorial(word.length));
	}

  	//Return the anagram list position of the word
  	return word.split('').reduce(function (prev,e,i,a) {
  		var subword = word.slice(i);
  		var u = unique(subword);

  		for(var i=0; i<u.length; i++) {
  			if (u[i] == e) break;
  			prev+= combinations(subword.replace(u[i], ''));
  		}

  		return prev;
  	}, 1)
}
