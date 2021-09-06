import { FormEvent, useState } from "react";
import { useApi } from "../../hooks/useApi";
import "./styles.css";
import astronaut from "../../assets/astronaut.svg";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const history = useHistory();
  const [dataInput, setDataInput] = useState("");
  const { authUser } = useApi();

  function handleUserLogIn(e: FormEvent) {
    e.preventDefault();
    if (dataInput.trim() === "") {
      alert("Campo vazio.");
      return;
    }
    authUser(dataInput).then((e) => {
      if (!e) {
        setDataInput("");
        return;
      }
      history.push("/home");
    });
  }

  return (
    <div id="login-page">
      <aside>
        <h1>Ola Dev.</h1>
        <div className="img-container">
          <div className="circule">
            <img src={astronaut} alt="Imagem de um astronauta." />
          </div>
        </div>
        <h1>Seja Bem vindo!</h1>
      </aside>

      <main>
        <h1>Buscador de Perfil</h1>
        <form onSubmit={handleUserLogIn}>
          <input
            onChange={(e) => setDataInput(e.target.value)}
            type="text"
            value={dataInput}
            placeholder="Insira o seu login."
          />
          <button type="submit">Acessar</button>
        </form>
      </main>
    </div>
  );
}
