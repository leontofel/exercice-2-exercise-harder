import { Avatar } from '@chakra-ui/avatar';
import { Badge, Flex, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { IDonation } from '../types';
import formatDate from '../utils/formatDate';
import TextAtom from "../atoms/TextAtom";

interface Props {
    donation: IDonation;
}

export const LeaderboardItem = ({ donation }: Props) => {
    return (
        <Flex
            boxShadow="md"
            p={3}
            bg="white"
            borderRadius="lg"
            maxWidth="xl"
            w="100%"
        >
            <Avatar size="lg" />
            <Box flex="1" ml={4}>
                <Flex justifyContent="space-between" h="100%">
                    <Flex flexDirection="column" justifyContent="center" textAlign="left">
                        <Text
                            fontWeight="bold"
                            color="blue.500"
                            fontSize="sm"
                            textTransform="uppercase"
                        >
                            {donation.team}
                        </Text>
                        <TextAtom fontWeight="bold" text={donation.displayName} />
                        <TextAtom fontSize="sm" text={donation.message} />
                    </Flex>

                    <Flex
                        flexDirection="column"
                        justifyContent="space-around"
                        textAlign="right"
                    >
                        <div>
                            <Badge
                                colorScheme="blue"
                                borderRadius="full"
                                textTransform="lowercase"
                                py={1}
                                px={3}
                                as="div"
                            >
                                {donation.count.toLocaleString()} pounds
                            </Badge>
                        </div>
                        <TextAtom fontSize="xs" text={formatDate(donation.createdAt)} />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};