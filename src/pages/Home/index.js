import React from 'react';
import Banner from '../../componentes/Banner/Banner';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
      <div className="App">
        <Banner/>
        <div className="box">
            <p>Projeto feito com o uso da  <a href="https://docs.eldenring.fanapis.com/">Elden Ring API</a> para gerenciar uma wiki com os itens, mágias, bosses, etc... do jogo da From Software: Elden Ring</p>

            <div className="box-route">
                <Link to="classes">Classes</Link>
                <Link to="bosses">Bosses</Link>
                <Link to="sorceries">Sorceries</Link>
                <Link to="npcs">NPCs</Link>
                <Link to="items">Items</Link>
                <Link to="weapons">Weapons</Link>
            </div>
        </div>
      </div>
  );
}
export default Home;