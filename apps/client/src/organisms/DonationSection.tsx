import { CountSelection } from "../molecules/CountSelection";
import { DonationDetails } from "../molecules/DonationDetails";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useMutation } from "urql";
import CreateDonation from "../graphql/mutations";
import StateChangeWarning from "../atoms/StateChangeWarning";

export default function DonationSection() {
    const [step, setStep] = useState(0);
    const [donationDetails, setDonationDetails] = useState({
        count: 20,
    });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [donationResult, createDonation] = useMutation(CreateDonation);

    const next = (values: any = {}) => {
        const mergedDetails = { ...donationDetails, ...values };

        if (step === pages.length - 1) {
            submitDonation(mergedDetails);
        } else {
            setStep(step + 1);
            setDonationDetails(mergedDetails);
        }
    };

    const previous = () => {
        setStep(step - 1);
    };

    const submitDonation = async (values: any) => {
        await createDonation({ dto: values });
        setShowConfirmation(true);
    }

    const pages = [
        <CountSelection next={next} initialCount={donationDetails.count} />,
        <DonationDetails next={next} previous={previous} />,
    ];

    return (
        <>
            <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
                {showConfirmation ?
                    <StateChangeWarning active={true} text={`Thank you for your donation of $ ${donationResult?.data.createDonation?.count}`} />
                    : (
                        pages[step]
                    )}
            </Box>
        </>
    );
}