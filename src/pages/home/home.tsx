import { useEffect } from "react";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import "./styles.css";

export function Home() {
  const history = useHistory();
  const { userLogIn } = useApi();
  const [inputData, setInputData] = useState("");
  const { requestUserGit, authUser } = useApi();

  function handleQueryUser(e: FormEvent) {
    e.preventDefault();

    if (inputData.trim() === "") {
      alert("Campo em branco.");
      return;
    }

    requestUserGit(inputData).then((response) => {
      if (!response) {
        alert("Usuario não existe.");
        setInputData("");
        return;
      }
      history.push(`/query/${inputData}`);
    });
  }
  /*
  useEffect(() => {
    authUser("joao-vi");
  }, [userLogIn.login]);
 */
  return (
    <div id="home-page">
      <header>
        <h1>Seja Bem Vindo!</h1>
        <form onSubmit={handleQueryUser}>
          <input
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Nome de usuário"
            type="text"
            value={inputData}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </header>
      <aside>
        <div className="img-wrapper">
          <img src={userLogIn.avatar} />
          <h3>{userLogIn.login}</h3>
        </div>
        <div className="content">
          <p>{userLogIn.name}</p>
          <p>{userLogIn.bio}</p>
          <p>{userLogIn.company}</p>
          <p>{userLogIn.location}</p>
        </div>
        <div className="content">
          <h3>
            Followers:
            <span> {userLogIn.followers}</span>
          </h3>
          <h3>
            Following: <span> {userLogIn.following}</span>
          </h3>
          <h3>
            Profile:
            <a href={userLogIn.profile}>
              <span> GitHub</span>
            </a>
          </h3>
        </div>
      </aside>
      <div className="main-content"> conteudo procilaçç</div>
    </div>
  );
}
