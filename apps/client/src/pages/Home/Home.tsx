import {Box, Grid, Heading, VStack, Text, Image, Spinner} from "@chakra-ui/react";
import logo from '../../assets/logo.png'
import {Counter} from "../../donations/Counter";
import {useQuery, useSubscription} from "urql";
import {Leaderboard} from "../../leaderboard/Leaderboard";
import {DonationWizard} from "../../donations/DonationWizard";

export default function Home() {

    const TotalDonationsQuery = `
        query Query {
        findTotal
        }
    `;

    const TotalUpdatedQuery = `
        subscription Subscription {
            totalUpdated {
            total
        }
        }
    `;
    const handleSubscription = (previous: any, newTotal: any) => {
        return newTotal?.totalUpdated?.total;
    }

    const [res] = useSubscription({ query: TotalUpdatedQuery}, handleSubscription);
    const [{ data, fetching, error }] = useQuery({
        query: TotalDonationsQuery
    });

    if(fetching) return <Spinner />;
    if(error) return <Text>Oh no... {error.message}</Text>;

    return (
      <>
        <Box>
            <Grid minH="100vh" p={3} bg="gray.50">
                <VStack spacing={8}>
                    <Image h="32" alt={"logo"} src={logo} />
                    <Heading as="h1" size="xl" >JOIN THE MOVEMENT!</Heading>
                    <Text >
                        The team is growing everyday and scoring wins for the planet!
                        <br /> Remove your trash with us and track our progress!
                    </Text>

                    <Heading as="h2" size="4xl" ><Counter from={0} to={res.data || data.findTotal}/></Heading>
                    <DonationWizard />
                    <Leaderboard />
                </VStack>
            </Grid>
        </Box>
      </>
    );
}