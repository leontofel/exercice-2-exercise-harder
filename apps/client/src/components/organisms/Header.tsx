import logo from '../assets/logo.png';
import Img from "../atoms/Img";
import MainTitle from "../molecules/MainTitle";
import {CounterAtom} from "../atoms/CounterAtom";
import {Heading, Spinner, Text} from "@chakra-ui/react";
import {useQuery, useSubscription} from "urql";
import {TotalDonationsQuery} from "../../graphql/queries";
import TotalUpdatedQuery from "../../graphql/subscriptions";

export default function Header() {
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
            <Img alt={"logo"} image={logo} />
            <MainTitle />
            <Heading as="h2" size="4xl" >
                <CounterAtom from={0} to={res.data || data.findTotal} />
            </Heading>

        </>
    );
}