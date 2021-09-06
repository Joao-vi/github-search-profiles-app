import { useApi } from "../../hooks/useApi";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router";

export function QueryPage() {
  const { userInfo, requestUserGit } = useApi();
  const [inputData, setInputData] = useState("");
  const history = useHistory();

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
          <img src={userInfo?.avatar} />
          <h3>{userInfo?.login}</h3>
        </div>
        <div className="content">
          <p>{userInfo?.name}</p>
          <p>{userInfo?.bio}</p>
          <p>{userInfo?.company}</p>
          <p>{userInfo?.location}</p>
        </div>
        <div className="content">
          <h3>
            Followers:
            <span> {userInfo?.followers}</span>
          </h3>
          <h3>
            Following: <span> {userInfo?.following}</span>
          </h3>
          <h3>
            Profile:
            <a href={userInfo?.profile}>
              <span> GitHub</span>
            </a>
          </h3>
        </div>
      </aside>
      <div className="main-content"> conteudo procilaçç</div>
    </div>
  );
}
