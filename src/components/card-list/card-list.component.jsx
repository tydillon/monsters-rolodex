import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

//props is calling the filtered monsters from app.js
export const CardList = props => {
  return (
    //card-list css from the card-list.styles.css
    <div className="card-list">
      {/* this maps over all of the filtered monsters and creates a card for each */}
      {props.monsters.map(monster => (
        // monster = {monster} is passing each individual monster in as a prop to each card
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}
