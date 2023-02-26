import React from 'react'

function Filter() {
    const people = [
        {
            name: 'James',
            age: 31,
        },
        {
            name: 'John',
            age: 45,
        },
        {
            name: 'Paul',
            age: 65,
        },
        {
            name: 'Ringo',
            age: 49,
        },
        {
            name: 'George',
            age: 34,
        }
    ];
    return (
        <div>
            {people.filter(person => person.age % 2 !== 0).map(filteredPerson => (
                <li>
                    {filteredPerson.name}{filteredPerson.age}
                </li>
            ))}
        </div>
    )
}

export default Filter
