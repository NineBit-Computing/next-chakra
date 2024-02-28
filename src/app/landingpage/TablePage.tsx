import { gql } from "@apollo/client";
import createApolloClient from "../../../apolloclient";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Country {
  name: string;
  capital: string;
  currency: string;
  awsRegion: string;
}

export default function TablePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
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
      setCountries(data.countries);
    };

    fetchData();
  }, []);

  return (
    <Box className="information-page" overflow="hidden">
      <Center>
        <Heading size="md" mt={5}>-- Country Details --</Heading>
      </Center>
      <Box maxHeight="800px" overflowY="scroll">
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
            {countries.map((country, index) => (
              <Tr key={index}>
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
