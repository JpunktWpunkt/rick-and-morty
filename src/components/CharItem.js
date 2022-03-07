import React from 'react';
import Checkbox from './Checkbox';


const CharItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt='' />
                </div>
           <div className="card-back">
               <h1>{item.name}</h1>
               <ul>
                   <li>
                       <strong>Species: </strong> {item.species}
                   </li>
                   <li>
                       <strong>Status: </strong> {item.status}
                   </li>
                   <li><button className="btn">Add to Favorite</button></li>
                   <Checkbox id={item.id} />
               </ul>
           </div>
            </div>
        </div>
    );
}


export default CharItem;