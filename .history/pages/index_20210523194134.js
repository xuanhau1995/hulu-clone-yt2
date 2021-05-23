/** @format */

import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import requests from "../utils/requests";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <Header />
      <Nav />
      <Results/>
    </div>
  );
}
//server side render
export async function getServerSideProps(context) {
  // pull url
  const genre = context.query.genre;
  //get request tmdb server
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json()); // then get result and pass it with result.json
  return {
    props: {
      results: request.results,
    },
  };
}
