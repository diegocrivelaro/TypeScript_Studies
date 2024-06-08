interface Person {
    name: string;
    age: number;
}

interface Clothing {
    size: string;
}

type Shape = Person | Clothing; // Shape is the union of the two interfaces

const shape = (shape: Shape) => {
    shape.name; // Error: Property 'name' does not exist on type 'Shape'.
    shape.age; // Error: Property 'age' does not exist on type 'Shape'.
    shape.size; // Error: Property 'size' does not exist on type 'Shape'.

    // To fix the error, we need to use type predicates

    if('name' in shape) {
        shape.name; // OK
        shape.age; // OK
    } else {
        shape.size; // OK
    }
}