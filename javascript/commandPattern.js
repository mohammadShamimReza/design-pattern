// des: In this pattern we decouple objects that execute a certain task from the object that calls the method

// initiatl 
class OrderManager {
    constructor() {
        this.orders = [];
    }

    placeOrder(order, id) {
        this.orders.push(id);
        return `You have successfully ordered ${order} (id: ${id})`;
    }

    trackOrder(id) { 
        return `Your ordered (id: ${id}) will arrive in 20 minutes`;
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
        return `Your order (id: ${id}) has been cancelled`;
    }

}


const manager = new OrderManager();

manager.placeOrder('Pizza', 1);
manager.trackOrder(1);
manager.cancelOrder(1);

console.log(manager.orders)