import { memo } from 'react';
import './Card.css';

function Card({name, image, description}) {
    return (
        <div className="card" data-aos="flip-left">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
export default memo(Card)