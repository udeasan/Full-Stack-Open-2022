import Person from "./Person";

const Persons = ({persons, filter}) => {

    const personsToShow = filter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {personsToShow.map(p => <Person person={p} key={p.id}/>)}
        </ul>
    );
}

export default Persons;