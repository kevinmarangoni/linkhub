import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { IUserDataInSession } from "@/types/user";

const UserButton = () => {
  const env = process.env.NEXT_PUBLIC_ENV;
  const session, { status } = useSession();
  const [user, setUser] = useState<IUserDataInSession>({
    id: "",
    email: "",
    avatar: "",
    name: "",
    active: false,
  });

  useEffect(() => {
    if (status === "authenticated") {
      setUser(session.data.session.user);
    }
  }, [session]);

  return (
    <div>
      {status == "authenticated" && (
        <>
          <Image
            src={user.avatar}
            alt={`user avatar`}
            height={100}
            width={100}
          />
          <p>{user.name}</p>
          <button
            onClick={() => {
              signOut();
            }}
          >
            {" "}
            sair
          </button>
        </>
      )}
      {status == "unauthenticated" && (
        <>
          <button
            onClick={() => {
              signIn("google");
            }}
          >
            {" "}
            google
          </button>

          <button
            onClick={() => {
              signIn("discord");
            }}
          >
            {" "}
            discord
          </button>

          <button
            onClick={() => {
              signIn("github");
            }}
          >
            {" "}
            github
          </button>

          {env !== "dev" && (
            <button
              onClick={() => {
                signIn("instagram");
              }}
            >
              {" "}
              instagram
            </button>
          )}
        </>
      )}
      {(status == "loading" || status == null || status == undefined) && (
        <>loading...</>
      )}
    </div>
  );
};

export default UserButton;
