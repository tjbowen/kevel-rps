import React, { useEffect, useState } from 'react';
import WeaponCard from './components/WeaponCard';
import { Results } from './components/Results';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './App.css';

const App = (props: any): JSX.Element => {
  // Properties
  const [userSelectedWeapon, UseUserSelectedWeapon] = useState<string>('');
  const [cpuSelectedWeapon, UseCpuSelectedWeapon] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const Weapons: any = {
    Rock: {
      Name: 'Rock',
      Strength: 'Smash',
      Weakness: 'Shade'
    },
    Paper: {
      Name: 'Paper',
      Strength: 'Shade',
      Weakness: 'Cutting'
    },
    Scissors: {
      Name: 'Scissors',
      Strength: 'Cutting',
      Weakness: 'Smash'
    }
  }
  // Functions
  useEffect(() => {
    if (cpuSelectedWeapon) {
      declareWinner(cpuSelectedWeapon);
    }
  })
  const handleClose = () => {
    UseUserSelectedWeapon('');
    UseCpuSelectedWeapon('');
    setResult('');
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const cpuSelectedWeaponGenerator = (): void => {
    let weaponsArray: string[] = Object.keys(Weapons);
    let index = Math.floor(Math.random() * weaponsArray.length);
    UseCpuSelectedWeapon(Weapons[weaponsArray[index]].Name);
  }
  const declareWinner = (cpuWeapon: string): void => {
    if (!cpuWeapon) {
      return;
    }
    switch(cpuWeapon) {
      case 'Rock':
        userSelectedWeapon.toLowerCase() == 'paper' ? setResult('winner')
      : userSelectedWeapon.toLowerCase() == 'scissors' ? setResult('loser')
      : setResult('tie');
        break;
      case 'Paper':
        userSelectedWeapon.toLowerCase() == 'scissors' ? setResult('winner')
      : userSelectedWeapon.toLowerCase() == 'rock' ? setResult('loser')
      : setResult('tie');
        break;
      default: 
        userSelectedWeapon.toLowerCase() == 'rock' ? setResult('winner')
      : userSelectedWeapon.toLowerCase() == 'paper' ? setResult('loser')
      : setResult('tie');
    }
    handleShow();
  }
  const onClick = (weapon: string): void => {
    UseUserSelectedWeapon(weapon);
    cpuSelectedWeaponGenerator();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>In war there are no winners, only widows.</h3>
      </header>
      <div className="">
        <h4>Choose your weapon</h4>
      </div>
      <div className="row">
        <WeaponCard
          Name={Weapons.Rock.Name}
          Weakness={Weapons.Rock.Weakness}
          Strength={Weapons.Rock.Strength}
          onClick={onClick}
        />
        <WeaponCard
          Name={Weapons.Paper.Name}
          Weakness={Weapons.Paper.Weakness}
          Strength={Weapons.Paper.Strength}
          onClick={onClick}
        />
        <WeaponCard
          Name={Weapons.Scissors.Name}
          Weakness={Weapons.Scissors.Weakness}
          Strength={Weapons.Scissors.Strength}
          onClick={onClick}
        />
      </div>
      <div className="row">
        <Results
          userSelectedWeapon={userSelectedWeapon}
          cpuSelectedWeapon={cpuSelectedWeapon} />
      </div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>
            {result == 'winner' ? <span>Victory!!!</span> 
           : result == 'loser' ? <span>DEFEATED...</span>
           : <span>Its a tie.</span>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
