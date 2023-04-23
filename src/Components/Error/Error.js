import './Error.css';

const Error = ({ message }) => {
  return (
    <div className='error'>
      <p>Oh no! Something went wrong! Please try again. {message}</p>
    </div>
  )
}

export default Error;