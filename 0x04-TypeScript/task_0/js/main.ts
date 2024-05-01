interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const john: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 34,
  location: 'New Jersey'
};

const jane: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  location: 'New York'
};

const studentsList: Student[] = [john, jane];

function renderStudentsTable(students: Student[]): void {
  const table = document.createElement('table');

  students.forEach((student: Student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderStudentsTable(studentsList);
