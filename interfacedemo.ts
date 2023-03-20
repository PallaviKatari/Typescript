interface Person {
  name: string;
}

interface Employee {
  id: number;
  salary: number;
}

// 👇️ Combine the Person and Employee interfaces
interface Developer extends Person, Employee {}

// 👇️ Alternatively use an intersection type
type Developer2 = Person & Employee;

const dev: Developer = {
  id: 1,
  name: 'Bobby Hadz',
  salary: 100,
};
