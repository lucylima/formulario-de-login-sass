import react from 'react';

let Formulario = () => {
  let login = () => {
    let email: String;
    let senha: String;
    
  
  
  }
  return (
    <div className="FormApp">
        <div className="form-card">
          <form action="" className="form">
            <h2 className="titulo-form">Entrar</h2>

            <div className="fields">
              <label htmlFor="">E-mail</label>
              <input type="email" name="" id="" />
            </div>

            <div className="fields">
              <label htmlFor="">Senha</label>
              <input type="password" name="" id="" />
            </div>

            <div className="utility-form">
              <div className="remember-password">
                <input type="checkbox" name="" id="senha" />
                <label htmlFor="">Lembrar minha senha</label>
              </div>
              <a href="" id="forgot-password">Esqueci minha senha</a>     
            </div>

            <div className="login-button">
              <button onClick={login}>Entrar</button>
            </div>

          </form>
        </div>
    </div>
  );
}

export default Formulario;