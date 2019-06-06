class Cat {
    constructor(name, color, mice, sleep) {
        this.name = name;
        this.color = color;
        this.mice = mice;
        this.sleep = sleep;
    }
    ShowCat() {
        console.log('==========================================');
        console.log(`Кличка:        ${this.name}`);
        console.log(`Окрас:         ${this.color}`);
        console.log(`Поймано мышей: ${this.mice}`);
        console.log(`Спит:          ${this.sleep} в сутки`);
        console.log('==========================================');
    }
}

module.exports  = Cat;