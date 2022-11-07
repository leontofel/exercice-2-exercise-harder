import { Text } from "@chakra-ui/react";

interface Props {
    text: string | undefined,
    fontSize?: string,
    fontWeight?: string,
}

export default function TextAtom({text, fontWeight, fontSize}: Props) {
    return <Text fontSize={fontSize} fontWeight={fontWeight}>{text} </Text>
}