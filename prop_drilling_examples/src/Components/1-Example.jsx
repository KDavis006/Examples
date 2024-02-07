import { useState } from 'react';
import { data } from '../data';

// Example component
const Example2 = () => {
  // State to manage list of people
  const [people, setPeople] = useState(data);

  // Function to remove a person from the list
  const removePerson = (id) => {
    setPeople((prevPeople) => {
      // Filter out the person with the specified id
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Prop Drilling Example</h3>
      {/* Pass the list of people and the removePerson function to List component */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

// List component
const List = ({ people, removePerson }) => {
  return (
    <>
      {/* Map through the list of people and render SinglePerson component for each */}
      {people.map((person) => (
        <SinglePerson
          key={person.id}
          {...person}
          removePerson={removePerson} // Pass removePerson function down
        />
      ))}
    </>
  );
};

// SinglePerson component
const SinglePerson = ({ id, first_name, last_name, removePerson }) => {
  return (
    <div className="item">
      <h4>{first_name} {last_name}</h4>
      {/* Button to remove this person, onClick triggers the removePerson function */}
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default Example2;
