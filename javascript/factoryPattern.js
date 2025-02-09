// type -1
const createUser = ({ firstName, lastName, email }) => ({
    firstName, lastName, email, fullName() { 
        return `${firstName} ${lastName}`;
    }   
})

const user1 = createUser({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com'
})

console.log(user1.fullName())

// type -2

const createObjectFromArray = ([key, value]) => ({ [key]: value })

const obj = createObjectFromArray(['name', 'John'])
console.log(obj)