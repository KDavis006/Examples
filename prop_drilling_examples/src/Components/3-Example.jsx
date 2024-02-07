import { createContext, useState, useContext } from 'react';
import { data } from '../data';

// Create a context for managing person data and functions
const PersonContext = createContext();

const ContextAPI = () => {
  // State to manage the list of people
  const [people, setPeople] = useState(data);

  // Function to remove a person from the list
  const removePerson = (id) => {
    setPeople((prevPeople) => {
      // Filter out the person with the specified id
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API/useContext</h3>
      {/* Render the List component */}
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // Access the context containing person data and functions
  const { people } = useContext(PersonContext);

  return (
    <>
      {/* Map through the list of people and render SinglePerson component for each */}
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, first_name, ip_address }) => {
  // Access the context containing the removePerson function
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{first_name}</h4>
      {/* Button to remove this person, onClick triggers the removePerson function */}
      <button onClick={() => removePerson(id)}>remove</button>
      {/* Display the IP address */}
      <p>IP Address: {ip_address}</p>
    </div>
  );
};

export default ContextAPI;
