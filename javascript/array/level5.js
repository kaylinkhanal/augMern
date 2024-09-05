const arr = ['ram','shyam', 'gopal']

const user = {
    'ram': 'thapa',
    'gopal': 'bhatta'
}

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const output = arr.map(item => {
    if (user[item]) {
        return (item + ' ' + user[item]).toUpperCase();
    } else {
        return item.toUpperCase();
    }
});
console.log(output)