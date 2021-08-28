const products = [
    'Dell inspiron 556 laptop',
    'iphone 12',
    'lenovo laptop',
    'Asus high gen laptop',
    'samsung galaxy 9 Phone',
    'xiomi note 8 phone',
    'asus gen phone',
    'apple white smart watch',
    'Dell purple color  Laptop',
    'dell black color  Laptop'
];
const searching = 'dell';
//indexof
const outPut = [];
/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        outPut.push(product);

    }

} */
// console.log(outPut);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // outPut.push(product);
    }
}
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        outPut.push(product);
    }
}
console.log(outPut);
