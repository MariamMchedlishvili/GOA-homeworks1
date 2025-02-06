function getAverage(marks) {
    let sum = marks.reduce((acc, mark) => acc + mark, 0);
    return Math.floor(sum / marks.length);
}

console.log(getAverage([90, 80, 70, 60])); 

const thermometer = {
    _celsius: 0,
    get temperature() {
        return this._celsius * 9/5 + 32;
    },
    set temperature(celsius) {
        this._celsius = celsius;
    }
};


const studentGrade = {
    _score: 0,
    get grade() {
        if (this._score >= 90) return 'A';
        if (this._score >= 80) return 'B';
        if (this._score >= 70) return 'C';
        if (this._score >= 60) return 'D';
        return 'F';
    },
    set score(value) {
        this._score = Math.max(0, Math.min(100, value));
    }
};


const secretPassword = {
    _password: '',
    get password() {
        return '*****';
    },
    set password(value) {
        this._password = btoa(value); // Simple Base64 encoding
    }
};
