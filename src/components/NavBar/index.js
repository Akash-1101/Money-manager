// Write your code here.
const Navbar = props => {
  const {prop} = props

  return (
    <div>
      <div>
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <p>Emoji Game</p>
      </div>
      <div>
        <p>Score: {prop}</p>
        <p>Top Score: {0}</p>
      </div>
    </div>
  )
}

export default Navbar
