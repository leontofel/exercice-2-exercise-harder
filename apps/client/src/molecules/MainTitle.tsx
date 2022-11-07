import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";

export default function MainTitle() {
    return (
        <>
            <Title as="h1" size="xl" text={"JOIN THE MOVEMENT!"}/>
            <Subtitle text={`The team is growing every day and scoring wins for the planet! Remove your trash with us and track our progress!`} />
        </>
    );
}