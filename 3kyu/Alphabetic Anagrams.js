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
		return unique(word).reduce(function (previousValue, e) {
			return previousValue / factorial(word.split(e).length - 1)
		}, factorial(word.length));
	}

	var sum = 0;
  	//Return the anagram list position of the word
  	word.split('').forEach(function (e,i,a) {
  		var subword = word.slice(i);
  		var u = unique(subword);

  		for(var i=0; i<u.length; i++) {
  			if (u[i] == e) break;
  			sum+= combinations(subword.replace(u[i], ''));
  		}
  	})

  	return sum + 1;
}
