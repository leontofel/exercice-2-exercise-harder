import {Heading} from "@chakra-ui/react";

interface Props {
    text: string,
    as?: any | undefined,
    size?: string,
}
export default function Title({text, as, size}: Props) {
    return (
        <>
            <Heading as={as || 'h1'} size={size || 'xl'} >{text}</Heading>
        </>
    );
}