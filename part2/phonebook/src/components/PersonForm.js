const PersonForm = ({name, handleName, number, handleNumber, people, handleUpdate, handleCreate}) => {

    const addPerson = (event) => {
        event.preventDefault();
    
        if (name === '' || number === '') {
          alert("Please fill all inputs");
        }
        else if (people.find(person => person.name === name)) {
          if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)){
            const person = people.find(person => person.name === name);
            const personObject = {
              name: person.name,
              number: number,
              id: person.id
            }
            handleUpdate(personObject.id, personObject)
          }
        }
        else if (people.find(person => person.number === number)) {
          alert(`The number ${number} is already added to phonebook`);
        }
        else {
          const currentId = people.length > 0 ? people[people.length - 1].id : 0;
          const personObject = {
            name: name,
            number: number,
            id: currentId + 1
          }
          handleCreate(personObject);
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