import { Box, Heading, Stack, VStack, Text } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'urql';
import { IDonation } from '../../types';
import { LeaderboardItem } from '../molecules/LeaderboardItem';
import { DonationsQuery } from '../../graphql/queries';

type DonationsQueryRes = {
    findAllSorted: IDonation[];
};

export const Leaderboard = () => {
    const [field, setOrderByField] = useState('createdAt');

    const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
        query: DonationsQuery,
        variables: {
            ordersBy: {
                field,
                direction: "desc",
            },
        },
    });

    if (error) return <Text>Something went wrong...</Text>;
    if (fetching || !data) return <Text>Loading...</Text>;

    return (
        <Box w="100%">
            <VStack spacing={4}>
                <Heading as="h1" size="2xl">
                    LEADERBOARD
                </Heading>

                <RadioGroup onChange={setOrderByField} value={field}>
                    <Stack direction="row">
                        <Radio value="createdAt">Most Recent</Radio>
                        <Radio value="count">Most Pounds</Radio>
                    </Stack>
                </RadioGroup>

                {data.findAllSorted !== undefined && data.findAllSorted.map((donation) => (
                    <LeaderboardItem key={donation.id} donation={donation} />
                ))}
            </VStack>
        </Box>
    );
};