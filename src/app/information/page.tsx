import { gql } from "@apollo/client";
import createApolloClient from "../../../apollo-client";
import Head from "next/head";
import Image from "next/image";

export default async function Information() {
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

  return (
    <div className="information-page">
      <h1>-- Information Page --</h1>
      <a href="/">Go to Home</a>
      <div>
        <h3>Countries go here</h3>
        <div>
          {data.countries.map((country: any) => (
            <div key={country.code}>
              {country.name} - {country.emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
