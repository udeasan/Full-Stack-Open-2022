import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import personService from './services/people';
import Notification from "./components/Notification";

const App = () => {

  const [people, setPeople] = useState([]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterByName, setFilterByName] = useState('');

  const [message, setMessage] = useState({});

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterByName = (event) => {
    setFilterByName(event.target.value)
  }

  const handleDelete = (person, id) => {
    personService.deleteOne(id)
    .then(() => {
      setPeople(people.filter(p => p.id !== id));
      setMessage({message: `${person.name} has been removed from the phonebook.`, type: "success"})
      setTimeout(() => {
        setMessage({});
      }, 4000);
    })
    .catch(() => {
      setMessage({message: `Information of ${person.name} has already been removed from server.`, type: "error"})
      setTimeout(() => {
        setMessage({});
      }, 4000);
      setPeople(people.filter(p => p.id !== id));
    })
  }

  const handleUpdate = (id, newPerson) => {
    personService.update(id, newPerson)
    .then(response => {
      setPeople(people.map(p => p.id !== id ? p : response));
      setNewName('');
      setNewNumber('');
      setMessage({message: `${newPerson.name} number was modified.`, type: "success"})
      setTimeout(() => {
        setMessage({});
      }, 4000);
    })
  }

  const handleCreate = (personObject) => {
    personService.create(personObject)
          .then(newPerson => {
            setPeople(people.concat(newPerson));
            setNewName('');
            setNewNumber('');
            setMessage({message: `Added ${personObject.name}.`, type: "success"})
            setTimeout(() => {
              setMessage({});
            }, 4000);
          })
          .catch(error => {
            console.log("An error has ocurred at creating a new person", error);
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
      <Notification message={message}/>
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
        handleCreate={handleCreate}
      />
      <h2>Numbers</h2>
      <People people={people} filter={filterByName} deleteOne={handleDelete}/>
    </div>
  );

}

export default App;
