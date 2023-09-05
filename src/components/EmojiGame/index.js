/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import Navbar from '../NavBar/index'
import './index.css'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props
    return (
      <div className="main-bg-container">
        <Navbar props="0" />
      </div>
    )
  }
}
export default EmojiGame
