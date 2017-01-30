/**
 * A sample for loading yaml files.
 *
 * Setup:
 *  $ npm init && npm install -save js-yaml
 *
 * Reference:
 *  - http://yaml.org/
 *  - https://github.com/nodeca/js-yaml
 *  - http://nodeca.github.io/js-yaml/
 *  - http://magazine.rubyist.net/?0009-YAML（日本語）
 */

let data;

let yaml = require('js-yaml');

// Hash.
let data1 = yaml.load(`
    greeting: hello,
    name: world
`);
console.log(data1);

// Array.
let data2 = yaml.load(`
    - aaa
    - bbb
    - ccc
`);
console.log(data2);

// Hash nested.
let data3 = yaml.load(`
    user:
        name: Yohei,
        age: 30
`);
console.log(data3);

// Array nested.
data = yaml.load(`
    -
        - aaa
        - bbb
        - ccc
`);
console.log(data);

// Hash & Array nested.
data = yaml.load(`
    user:
        name: 'Yohei'
        favorites:
            - Ramen
            - Tennis
`);
console.log(data);

data = yaml.load(`
    members:
        - name: Shimizu
          age: 20
        - name: Kento
          age: 25
`);
console.log(data);

// Comment.
let data4 = yaml.load(`
    # This is a comment.
    name: Yohei
`);
console.log(data4);

// Data types.
data = yaml.load(`
    name: 'Kobashi'
    age: 31
    is-male: true
    weight: 60.0001
    type : "123"
    country: null
    birthday: 1985-03-03
`);
console.log(data);

// Multi line.
data = yaml.load(`
    comment: |
        aaa
        bbb
        ccc
`);
console.log(data);