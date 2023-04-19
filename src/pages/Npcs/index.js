import React from 'react';
import axios from 'axios'
import Banner from '../../componentes/Banner/Banner';
import Card from '../../componentes/Card/Card';
import BackButton from '../../componentes/BackButton/BackButton';
import { useEffect, useState } from 'react';

function Npcs() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get("https://eldenring.fanapis.com/api/npcs?limit=100")
        .then((resJson) => setData(resJson.data.data))
    },[])
  
  
    return (
      <div className="App">
        <Banner/>
        <BackButton/>
        <div className="container">
            {data.map((el) => <Card key={el.id} name={el.name} image={el.image} description={el.role}/>)}
        </div>
      </div>
  );
}
export default Npcs;