import Person from "./Person";

const People = ({people, filter, deleteOne}) => {

    const peopleToShow = filter === ""
    ? people
    : people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {peopleToShow.map(p => <Person person={p} key={p.id} deleteOne={deleteOne}/>)}
        </ul>
    );
}

export default People;