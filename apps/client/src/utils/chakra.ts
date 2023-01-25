import { extendTheme } from "@chakra-ui/react";
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';

export const theme = extendTheme({
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    }
});