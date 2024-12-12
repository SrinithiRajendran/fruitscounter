// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruitsCounter-container">
        <div className="fruitscounter-inner-container">
          <h1 className="heading">
            Bob ate <span className="heading-count">{mangoCount}</span> Mangoes{' '}
            <span className="heading-count">{bananaCount}</span> Bananas
          </h1>

          <div className="card-container">
            <div className="card-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat mango
              </button>
            </div>
            <div className="card-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
