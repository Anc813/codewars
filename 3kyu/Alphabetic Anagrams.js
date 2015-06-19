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
  	return word.split('').reduce(function (sum,e,i,a) {
  		var subword = word.slice(i);
  		var u = unique(subword);

  		return u.slice(0, u.indexOf(e)).reduce(function (sum, e) {
  			return sum + combinations(subword.replace(e, ''));
  		}, sum)
  	}, 1)
}
