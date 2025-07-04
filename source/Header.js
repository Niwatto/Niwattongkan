import React from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import { Box } from 'ink';

const Header = ({ name = 'My Profile' }) => (
    <Box flexDirection="column" marginBottom={1}>
        <Gradient name="summer">
            <BigText text={name} align="left" font="chrome" />
        </Gradient>
    </Box>
);

export default Header; 