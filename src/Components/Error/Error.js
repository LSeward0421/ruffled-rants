import './Error.css';

const Error = ({ errorMessage }) => {
  return (
    <div className='error'>
      <p>Oh no! Something went wrong: {errorMessage}</p>
    </div>
  )
}

export default Error;