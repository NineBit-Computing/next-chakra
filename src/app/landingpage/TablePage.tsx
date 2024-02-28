import { gql } from "@apollo/client";
import createApolloClient from "../../../apolloclient";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Center } from "@chakra-ui/react";

export default async function TablePage() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
          capital
          currency
          awsRegion
        }
      }
    `,
  });

  return (
    <Box className="information-page" overflow="hidden"> {/* Ensure overflow is set on the wrapping Box */}
      <Center>
        <Heading size="md" mt={5}>-- Country Details --</Heading>
      </Center>
      <Box maxHeight="800px" overflowY="scroll"> {/* Apply maxHeight and overflowY to the wrapping Box */}
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Capital</Th>
              <Th>Currency</Th>
              <Th>AWS Region</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.countries.map((country: any) => (
              <Tr key={country.name}>
                <Td>{country.name}</Td>
                <Td>{country.capital}</Td>
                <Td>{country.currency}</Td>
                <Td>{country.awsRegion}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}








