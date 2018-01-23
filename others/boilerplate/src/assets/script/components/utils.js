// const slugfy = (word) => {
// 	const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·_/-,:;"';
// 	const to = 'aaaaaeeeeeiiiiooooouuuunc----';

// 	let w = word.toLowerCase()
// 		.replace('. ', '-')
// 		.replace(/^\s+|\s+$/g, '-')
// 		.replace(/\s+/g, '-')
// 		.replace('.', '-')
// 		.replace(/'/g, '-')
// 		.replace(/\(/g, '-')
// 		.replace(/\)/g, '-')
// 		.replace(/\[/g, '-')
// 		.replace(/]/g, '-')
// 		.replace(/\$/g, 's');
// 	for (let i = 0, l = from.length; i < l; i++) {
// 		w = w.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
// 	}
// 	return w;
// };

// export default slugfy
