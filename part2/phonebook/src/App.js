import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import personService from './services/people';

const App = () => {

  const [people, setPeople] = useState([]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterByName, setFilterByName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterByName = (event) => {
    setFilterByName(event.target.value)
  }

  const handleDelete = (id) => {
    personService.deleteOne(id)
    .then(() => {
      const newList = people.filter(p => p.id !== id);
      setPeople(newList);
    })
  }

  const handleUpdate = (id, newPerson) => {
    personService.update(id, newPerson)
    .then(response => {
      setPeople(people.map(p => p.id !== id ? p : response));
      setNewName('');
      setNewNumber('');
    })
  }

  useEffect(() => {
    personService.getAll()
    .then(people => {
      setPeople(people);
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={filterByName} handleFilter={handleFilterByName} />
      <h2>Add a new one</h2>
      <PersonForm
        name={newName}
        handleName={handleNameChange}
        setName={setNewName}
        number={newNumber}
        handleNumber={handleNumberChange}
        setNumber={setNewNumber}
        people={people}
        setPeople={setPeople}
        handleUpdate={handleUpdate}
      />
      <h2>Numbers</h2>
      <People people={people} filter={filterByName} deleteOne={handleDelete}/>
    </div>
  );

}

export default App;
