
import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Oops! Looks like something went wrong.</h1>
        </main>
      </>
    );
}
 
export default ErrorPage;
