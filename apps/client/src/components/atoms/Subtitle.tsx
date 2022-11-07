import {Text} from "@chakra-ui/react";

interface Props {
    text: string,
}
export default function Subtitle({text}: Props) {
    return <Text>{text}</Text>;
}