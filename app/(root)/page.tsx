import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import { Button } from "@base-ui/react";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log("Session:", session);
  return (
    <>
      <h1 className="h1-bold">Welcome to NextJs!</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
