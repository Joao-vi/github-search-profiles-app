import { useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";

type GitContextType = {
  userInfo: UserInfoType | undefined;
  requestUserGit: (query: string) => Promise<boolean>;
  paginationRepositories: (page: number) => Promise<void>;
  repositories: RepositoriesType[] | undefined;
  authUser: (query: string) => Promise<boolean>;
  userLogIn: UserLogInType;
};
export const gitContext = createContext({} as GitContextType);

type GitContextProviderProps = {
  children: ReactNode;
};

type UserInfoType = {
  name?: string;
  login?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  company?: string;
  followers?: number;
  following?: number;
  profile?: string;
};

type RepositoriesType = {
  title?: string;
  description?: string;
  link?: string;
};

type UserLogInType = {
  name?: string;
  login?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  company?: string;
  followers?: number;
  following?: number;
  profile?: string;
};

export function GitContextProvider({ children }: GitContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [repositories, setRepositories] = useState<RepositoriesType[]>();
  const [userLogIn, setUserLogIn] = useState<UserLogInType>({});

  async function requestUserGit(quer: string) {
    const requestProfile = await fetch(`https://api.github.com/users/${quer}`);
    if (!requestProfile.ok) {
      return false;
    }

    const {
      name,
      login,
      avatar_url,
      bio,
      company,
      followers,
      following,
      htlm_url,
    } = await requestProfile.json();

    setUserInfo({
      name: name,
      avatar: avatar_url,
      bio: bio,
      company: company,
      followers: followers,
      following: following,
      profile: htlm_url,
      login: login,
    });
    return true;
  }

  async function paginationRepositories(page = 1) {
    const request = await fetch(
      `https://api.github.com/users/${userInfo?.login}/repos?page=${page}&per_page=6`
    );
    const arrayRepositories = await request.json().then((array) => {
      return array.map((el: any) => {
        return {
          title: el.name,
          description: el.description,
          link: el.html_url,
        };
      });
    });
    setRepositories(arrayRepositories);
  }

  async function authUser(query: string) {
    const request = await fetch(`https://api.github.com/users/${query}`);
    if (!request.ok) {
      alert("Usuario não encontrado.");
      return false;
    }
    const {
      name,
      login,
      avatar_url,
      bio,
      company,
      followers,
      following,
      htlm_url,
      location,
    } = await request.json();

    setUserLogIn({
      name: name,
      avatar: avatar_url,
      bio: bio,
      company: company,
      followers: followers,
      following: following,
      profile: htlm_url,
      login: login,
      location: location,
    });
    return true;
  }

  return (
    <gitContext.Provider
      value={{
        userInfo,
        requestUserGit,
        paginationRepositories,
        repositories,
        authUser,
        userLogIn,
      }}
    >
      {children}
    </gitContext.Provider>
  );
}
