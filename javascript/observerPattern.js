class ObserberAble {
    constructor(parameters) {
        this.obserbers = [];
    }

    subscribe(observer) {
        this.obserbers.push(observer);
    }
    unsubscribe(observer) {
        this.obserbers = this.obserbers.filter(obs => obs !== observer);
    }
    notify(data) {
        this.obserbers.forEach(observer => observer(data));
    }
}