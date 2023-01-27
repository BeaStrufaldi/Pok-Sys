import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
        try {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "login": login,
                "password": password
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const response = await fetch("https://localhost:7264/Login", requestOptions);
            
            //
            if (!response.ok) {
                console.log("API not responding");
                return [];
            }
            
            //get the json
            let actualData = await response.json();
            console.log(actualData);
        }
        
        //erro
        catch (err){
            console.log(err);
        }
    }
    

  return (
    <div className="container">
        <div className='logo'>
            <img src="https://imgur.com/S8Ezlmo.png"/>
        </div>        
        <form>
            <h2>Bem vindo ao PokéSys</h2>
            <div className="mb-3">                    
                <input type="email" placeholder='Usuário' className="form-control" onChange={handleLoginChange} id="email" aria-describedby="emailHelp"></input>
        
            </div>
            <div className="mb-3">                
                <input type="password" placeholder='Senha' className="form-control" onChange={handlePasswordChange} id="password"></input>
            </div>
            <div className='senha'>
                <a href="Cadastro.js" className="link-light">Esqueci a Senha</a>
            </div>
            <button id="Entrar" type="submit" className="btn btn-warning" onClick={handleClick} >Entrar</button>
            <hr></hr>
            <button id="cadastrar" type="submit" className="btn btn-success" >Cadastre-se</button>
            
            
        </form>
      
    </div>
  );
}