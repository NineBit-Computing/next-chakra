import { gql } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import Head from 'next/head';
import Image from "next/image";
// import styles from '../styles/Home.module.css';

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  // return {
  //   props: {
  //     countries: data.countries.slice(0, 4),
  //   },
  // };

  return (
    // <div className={styles.container}>
    <div className="main-container">
    <h1>Countries</h1>
    <div>
      <h3>Countries go here</h3>
      <div>
        {data.countries.map((country: any) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>

    </div>
  </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     {{data.countries.slice(0, 4)}}
    //   </div>

    //   <div className="relative flex place-items-center">
    //     <h1>HEAD</h1>
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <h2>Bottom</h2>
    //   </div>
    // </main>
  );
}
