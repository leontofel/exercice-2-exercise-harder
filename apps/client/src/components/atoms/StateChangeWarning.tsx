import {Text} from "@chakra-ui/react";

interface Props {
    active: boolean,
    text: string,
}
export default function StateChangeWarning({active, text}: Props) {
    if(active) return <Text>{text}</Text>;
    return <></>;
}