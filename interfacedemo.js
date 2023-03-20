var dev = {
    id: 1,
    name: 'Bobby Hadz',
    salary: 100,
    develop: function () {
        console.log("".concat(this.name, " - Develop an app in ").concat(this.salary));
    }
};
console.log(dev);
dev.develop();
