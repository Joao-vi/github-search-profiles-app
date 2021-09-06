import { useApi } from "../../hooks/useApi";

import * as S from "./styles";

export function Repositories() {
  const { repositories, paginationRepositories } = useApi();
  return (
    <S.WrapperTab>
      <S.MenuTab>
        <S.OptionTab>Opção 1</S.OptionTab>
        <S.OptionTab>Opção 2</S.OptionTab>
      </S.MenuTab>

      <S.ItemTab>
        <button onClick={() => paginationRepositories(1)}>1</button>
        <button onClick={() => paginationRepositories(2)}>2</button>
        <button onClick={() => paginationRepositories(3)}>3</button>

        {repositories ? (
          repositories.map((el, key) => {
            return (
              <div key={key}>
                <p>{el.title}</p>
                <p>{el.description}</p>
                <p>{el.link}</p>
              </div>
            );
          })
        ) : (
          <p>Usuario não tem repositorios</p>
        )}
      </S.ItemTab>

      <S.ItemTab>Titulo da opção 2</S.ItemTab>
    </S.WrapperTab>
  );
}
