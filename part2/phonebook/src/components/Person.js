const Person = ({ person, deleteOne }) => {
    const handleDelete = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            deleteOne(person, person.id);
        }
    }

    return (
        <li key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button></li>
    );
}

export default Person;