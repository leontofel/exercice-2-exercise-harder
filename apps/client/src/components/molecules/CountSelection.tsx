import {
    Button,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    useRadioGroup,
    VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import RadioCard from './RadioCard';
import Title from "../atoms/Title";
import TextAtom from "../atoms/TextAtom";

interface Props {
    initialCount: number;
    next: (values: any) => void;
}

const options = [5, 20, 50, 100];

export const CountSelection = ({ initialCount, next }: Props) => {
    const [pounds, setPounds] = useState(initialCount);
    const [customAmount, setCustomAmount] = useState(
        '' + (options.includes(pounds) ? '' : pounds)
    );

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'pounds',
        value: pounds,
        onChange: (nextValue) => {
            setCustomAmount('');
            setPounds(parseInt(nextValue));
        },
    });

    const group = getRootProps();

    const nextStep = () => {
        next({ count: pounds });
    };

    return (
        <VStack spacing={4} align="stretch">
            <Title as="h3" size="md" text={"JOIN #TEAMSEAS"} />
            <TextAtom fontSize="md" fontWeight="bold" text="$1 removes a pound of trash" />
            <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
                {options.map((value) => {
                    const radio = getRadioProps({ value, enterKeyHint: '' });
                    return (
                        <RadioCard key={value} {...radio}>
                            {value} pounds
                        </RadioCard>
                    );
                })}
            </SimpleGrid>

            <NumberInput
                onFocus={() => setPounds(0)}
                onChange={(value) => {
                    setPounds(parseInt(value));
                    setCustomAmount(value);
                }}
                value={customAmount}
            >
                <NumberInputField placeholder="Other amount" />
            </NumberInput>

            <hr />

            <Button
                colorScheme="orange"
                size="lg"
                borderRadius="full"
                onClick={nextStep}
            >
                Next
            </Button>
        </VStack>
    );
};