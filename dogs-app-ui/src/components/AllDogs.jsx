import React, {useState} from 'react'
import DogDetail from './DogDetail'
import Row from 'react-bootstrap/Row'
// import { getAllDogs } from '../services/dog-service'

const AllDogs = () => {
  const [total, setTotal] = useState(0);
  const totalCountHandler = (name) =>{
    console.log(name)
    setTotal(total+1);
}

const dogs = [
    {"dog_id":1, "name":"Einstein", "age":3},
    {"dog_id":2, "name":"Kaya", "age":5},
    {"dog_id":3, "name":"Lassie", "age":7}
  ]

  return (
    <>
      <h1> Total Dog Count Is: {total}</h1>
      <Row >
      {dogs.map(dog => (
      <div 
        className='container' key={dog.id}>
        <DogDetail info={dog} parentCount={totalCountHandler} />
      </div>
       ))}
      </Row>
    </>
  )
}

export default AllDogs