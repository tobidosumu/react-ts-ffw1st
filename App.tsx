import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  return <div>{isLoggedIn ? <ProfileCard /> : <Card />}</div>;
}

{
  /* Card component starts from here */
}

let isLoggedIn = true;

// const user = ['Tobi', 'Shad'];
const users = {
  fName: 'Tobi',
  lName: 'Dosumu',
};

const Card = () => {
  return (
    <div className="mainTxt" style={{ marginBottom: '30px' }}>
      <h1 style={{ color: 'blue' }}>Welcome to my app {users.fName}</h1>
      <MyButton />
    </div>
  );
};

const MyButton = () => {
  return <button>I'm a button</button>;
};

{
  /* ProfileCard component starts from here */
}

const user = {
  name: 'Tobi Dosumu',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const ProfileCard = () => {
  return (
    <div className="mainTxt">
      <h2> {user.name} </h2>
      <img
        className="avatar"
        src={user.imageUrl}
        // alt={'Photo of ' + user.name}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <MyPets />
      <MyAlertBtn />
      <MyAlertBtn />

    </div>
  );
};

const pets = [
  { name: 'Perry', myPet: true, id: 1 },
  { name: 'Panda', myPet: true, id: 2 },
  { name: 'Kim', myPet: true, id: 3 },
  { name: 'Captain', myPet: false, id: 4 },
];

const MyPets = () => {
  const petsList = pets.map((pet) => (
    <li key={pet.id} style={{ color: pet.myPet ? 'blue' : 'black' }}>
      {pet.name}
    </li>
  ));

  return <ul>{petsList}</ul>;
};

function MyAlertBtn() {
  const [count, setCount] = useState(0);

  function alertBtn() {
    // alert('You clicked me!')
    setCount(count + 1);
  }

  return (
    <button onClick={alertBtn} className="alertBtn">
      Alert button clicked {count} times
    </button>
  );
}
