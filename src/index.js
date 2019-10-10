module.exports = function check(str, bracketsConfig) {
	let arr = str.split('');
	let newArr = [];
	let openBrackets = [];
	let closeBrackets = [];
  
  for (let elem of bracketsConfig) {
	if (elem.includes('|') || elem.includes('7') || elem.includes('8')) {
		closeBrackets.push(elem[0], elem[1]);
	} else {
		openBrackets.push(elem[0]);
		closeBrackets.push(elem[1]);
	}
  }
  
  for (let item of arr) {
	if (openBrackets.includes(item)) {
	  newArr.push(item);
	};
	if (closeBrackets.includes(item)) {
	  let pair = openBrackets[closeBrackets.indexOf(item)];
	  if (newArr.length > 0 && (newArr[newArr.length-1] === pair || newArr[newArr.length-1] === item)) {
		newArr.splice(-1, 1);
	  } else {
		newArr.push(item);
	  }
	}
  }
  
  return (newArr.length === 0);
}
