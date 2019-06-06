/*const argv = process.argv.slice(2);
const User = require('./classes/user');

class User {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    ShowUser() {
        console.log(`Username: ${this.user} Password: ${this.pass}`)
    }
}

switch(argv[0]){
    case `--help`:
        console.log(`--help Show all info;`);
        console.log(`--version Show version;`);
        break;
    case `--version`:
        console.log(`v0.1.0`);
        break;
    case `--create`:
        let name = argv[1];
        let pass = argv[2];
        let user = new User(name, pass);
        user.ShowUser();
        break;
    default:
        console.log(`use --help To list all options`);
        break;
}
*/

const User = require('./classes/User.js');
const Dog = require('./classes/Dog.js');
const Cat = require('./classes/Cat');

const argv = process.argv.slice(2);

switch(argv[0]){
    case `--help`:
        console.log(`--help Show all info;`);
        console.log(`--version Show version;`);
        break;
    case `--version`:
        console.log(`v0.1.0`);
        break;
    case `--create-user`:
        if (argv.length !== 3) {
            console.error('Неверное количество аргументов');
            console.log('--create-user <имя> <пароль>');
            return;
        }
        let user = new User(argv[1], argv[2]);
        user.ShowUser();
        break;
    case `--create-dog`:
        if (argv.length < 2 || argv.length > 4) {
            console.error('Неверное количество аргументов');
            console.log('--create-dog [имя] [пароль]');
            return;
        }
        let dog = new Dog(argv[1], argv[2], argv[3]);
        dog.ShowDog();
        break;
    case `--create-cat`:
        let cat = new Cat(argv[1], argv[2], argv[3], argv[4],);
        cat.ShowCat();
        break
    default:
        console.log(`use --help To list all options`);
        break;
}



