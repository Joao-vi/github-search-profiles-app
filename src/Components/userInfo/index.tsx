import { useApi } from "../../hooks/useApi";
import * as s from "./style";

export function UserInfo() {
  const { userInfo } = useApi();

  function IsRender() {
    return (
      <>
        <s.ImgUser src={userInfo?.avatar} alt="Foto do usuario." />
        <s.InfoContent>
          <h3>{userInfo?.name}</h3>
          <p>Username: {userInfo?.login} </p>
          <p>Bio: {userInfo?.bio} </p>
          {userInfo?.company && <p>Company: {userInfo?.company}</p>}
          <p>
            <a
              href={userInfo?.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userInfo?.profile}
            </a>
          </p>
          <s.FooterContent>
            <s.ItemFooter>
              <p>Followers</p>
              <p>{userInfo?.followers}</p>
            </s.ItemFooter>
            <s.ItemFooter>
              <p>Following</p>
              <span>{userInfo?.following}</span>
            </s.ItemFooter>
          </s.FooterContent>
        </s.InfoContent>
      </>
    );
  }
  return (
    <s.Main>
      {userInfo?.login ? (
        <IsRender />
      ) : (
        <s.Warning>Usuario não encontrado</s.Warning>
      )}
    </s.Main>
  );
}
