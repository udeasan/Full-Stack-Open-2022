const PersonForm = ({name, handleName, setName, number, handleNumber, setNumber, persons, setPersons}) => {

    const addPerson = (event) => {
        event.preventDefault();
    
        if (name === '' || number === '') {
          alert("Please fill all inputs");
        }
        else if (persons.find(person => person.name === name)) {
          alert(`The name ${name} is already added to phonebook`);
        }
        else if (persons.find(person => person.number === number)) {
          alert(`The number ${number} is already added to phonebook`);
        }
        else {
          const newPerson = {
            name: name,
            number: number,
            id: persons.length + 1
          }
          setPersons(persons.concat(newPerson));
          setName('');
          setNumber('');
        }
      }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={name} onChange={handleName} />
            </div>
            <div>
                number: <input value={number} onChange={handleNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;