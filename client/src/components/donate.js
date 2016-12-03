import React, { Component } from 'react'
import * as styles from '../style'

export default class Donate extends Component {
  
  renderInput(label, placeholder){
    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 10px',
      color: 'lightgray'
    }

    const input = {
      padding: '5px',
      borderRadius: '5px',
      border: 'none'
    }
    return (
      <div style={rowStyle}>
        <div style={{marginRight: '10px'}}>{label}</div>
        <input style={input} type='text' placeholder={placeholder}/>
      </div>
    )
  }
  
  render(){
    const background = {
      backgroundColor: 'rgb(36,36,36)',
      height: '250px',
      display: 'flex',
      justifyContent: 'space-around'
    }

    const title = {
      ...styles.text.title
    }
    return(
      <div style={background}>
        <div>
          <p style={title}>
            Donate
          </p>
          <div>
            { this.renderInput('Email', 'you@example.com') }
            { this.renderInput('Amount', '€50') }
            <button style={styles.button}>Pay with card</button >    
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
