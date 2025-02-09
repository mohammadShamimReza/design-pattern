// // des: In this pattern we decouple objects that execute a certain task from the object that calls the method

// // 1st version
// class OrderManager1st {
//     constructor() {
//         this.orders = [];
//     }

//     placeOrder(order, id) {
//         this.orders.push(id);
//         return `You have successfully ordered ${order} (id: ${id})`;
//     }

//     trackOrder(id) { 
//         return `Your ordered (id: ${id}) will arrive in 20 minutes`;
//     }

//     cancelOrder(id) {
//         this.orders = this.orders.filter(order => order.id !== id);
//         return `Your order (id: ${id}) has been cancelled`;
//     }

// }


// const manager = new OrderManager1st();

// manager.placeOrder('Pizza', 1);
// manager.trackOrder(1);
// manager.cancelOrder(1);

// console.log(manager.orders)

// 2nd version
// create class OrderManager2nd that will be used to execute commands
class OrderManager2nd { 
    constructor() {
        this.orders = [];
    }
    
    execute(command, ...args) {
        return command.execute(this.orders, ...args);
    }
}

// create class Command that will be used to create commands
class Command {
    constructor(execute) { 
        this.execute = execute;
    }
}

// create functions that will return commands

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (id: ${id})`;
    })
}

// create functions that will return commands

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        return `Your order (id: ${id}) has been cancelled`;
    })
}

// create functions that will return commands
function TrackOrderCommand(id) {
    return new Command(() =>`Your ordered (id: ${id}) will arrive in 20 minutes`);
 }

// create instance of OrderManager2nd
const manager2 = new OrderManager2nd();

manager2.execute(PlaceOrderCommand('Pizza', 1));
manager2.execute(TrackOrderCommand(1));
manager2.execute(CancelOrderCommand(1));


console.log(manager2)