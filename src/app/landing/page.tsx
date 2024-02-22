import { gql } from "@apollo/client";
import createApolloClient from "../../../apollo-client";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css';

export default async function Landing() {
  return (
    // <div className={styles.container}>
    <div className="landing-page">
      <h1>Landing Page</h1>
      <a href="/">Go to Home</a>
      <div></div>
    </div>
  );
}
