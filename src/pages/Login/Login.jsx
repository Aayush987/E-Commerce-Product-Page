import { useNavigate } from "react-router-dom";
import './Login.css'


const Login = () => {
  const Navigate = useNavigate();
   
  const handleLogin = async () => {
   await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
  })
})
.then(res => res.json())
.then((data) => {
  const { token } = data
  localStorage.setItem('token', token);
  Navigate('/home');
});
};


  return (
      <div className="box">
        <h1>Click here to Login</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
  )
}

export default Login