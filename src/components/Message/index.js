// Write your code here
import './index.css'

const Message = props => {
  const {isLogedIn} = props
  const message = isLogedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{message}</h1>
}

export default Message
