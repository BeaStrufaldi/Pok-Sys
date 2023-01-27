import { useState } from 'react';

export default function Cadastro(){




return (
    <div className="container">
        <div className='logo'>
            <img src="https://imgur.com/S8Ezlmo.png"/>
        </div>        
        <form>
            {/* <h2>Bem vindo ao PokéSys</h2> */}
            <div className="mb-3">                    
                <input type="text" placeholder='Nome' className="form-control" onChange={handleNomeChange} id="Name" aria-describedby="emailHelp"></input>        
            </div>
            <div className="mb-3">                
                <input type="text" placeholder='Sobrenome' className="form-control" onChange={handleSobrenomeChange} id="Surname"></input>
            </div>
            <div className="mb-3">                
                <input type="email" placeholder='Email' className="form-control" onChange={handleEmailChange} id="Email"></input>
            </div>
            <div className="mb-3">                
                <input type="text" placeholder='Usuario' className="form-control" onChange={handleUsuarioChange} id="Usuario"></input>
            </div>
            <div className="mb-3">                
                <input type="password" placeholder='Senha' className="form-control" onChange={handlePasswordChange} id="Password"></input>
            </div>
            <div className="mb-3">                
                <input type="date" className="form-control" onChange={handleBirthdateChange} id="Birthdate"></input>
            </div>
            <div className="mb-3">                
                <input type="tel" placeholder='Telefone' className="form-control" onChange={handlePhoneChange} id="Phone"></input>
            </div>
            <div className='senha'>
                <a href="#" className="link-light">Esqueci a Senha</a>
            </div>
            <button id="Entrar" type="submit" className="btn btn-warning" onClick={handleClick} >Entrar</button>
            <hr></hr>
            <button id="cadastrar" type="submit" className="btn btn-success" >Cadastre-se</button>
            
            
        </form>
      
    </div>
  );
}