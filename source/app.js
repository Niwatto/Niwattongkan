import React from 'react';
import { Box } from 'ink';
import Header from './Header.js';
import ProfileTable from './ProfileTable.js';
import { profileData } from './profile-data.js';

export default function App() {
    return (
        <Box flexDirection="column" padding={1}>
            <Header name={profileData.name} />
            <ProfileTable profile={profileData} />
        </Box>
    );
} 