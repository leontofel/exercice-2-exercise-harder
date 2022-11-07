import { Box, Grid, VStack } from "@chakra-ui/react";
import Header from "../../organisms/Header";
import DonationSection from "../../organisms/DonationSection";
import { Leaderboard } from "../../organisms/Leaderboard";

export default function Home() {
    return (
      <>
        <Box>
            <Grid minH="100vh" p={3} bg="gray.50">
                <VStack spacing={8}>
                    <Header />
                    <DonationSection />
                    <Leaderboard />
                </VStack>
            </Grid>
        </Box>
      </>
    );
}