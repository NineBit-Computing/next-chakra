import { gql } from "@apollo/client";
import createApolloClient from "../../../apolloclient";

export default async function Table() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query posts($options: PageQueryOptions) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `,
  });

  return (
    <div className="information-page">
      <h1>-- Post Details --</h1>
      <div>
        <h3>Posts go here</h3>
        <div>
          {data.posts.data.map((post: any) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>ID: {post.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
