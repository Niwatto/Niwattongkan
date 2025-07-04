import React from 'react';
import { Box, Text, Newline } from 'ink';

const ProfileTable = ({ profile }) => (
    <Box borderStyle="single" padding={2} flexDirection="column" width={80}>
        {/* Personal Info Section */}
        <Box flexDirection="column" marginBottom={1}>
            <Text>
                Name: <Text color="cyan" bold>{profile.name}</Text>
            </Text>
            <Text>
                Title: <Text color="green" bold>{profile.title}</Text>
            </Text>
            <Text>
                Bio: <Text color="gray" italic>{profile.bio}</Text>
            </Text>
        </Box>

        <Newline />

        {/* Skills Section */}
        <Box flexDirection="column" marginBottom={1}>
            <Text color="yellow" bold>💼 Skills:</Text>
            <Box flexDirection="column" marginLeft={2}>
                {profile.skills.map((skill, index) => (
                    <Text key={skill}>
                        <Text color="green">•</Text> {skill}
                        {index < profile.skills.length - 1 && ''}
                    </Text>
                ))}
            </Box>
        </Box>

        <Newline />

        {/* Contact Section */}
        <Box flexDirection="column">
            <Text color="magenta" bold>📞 Contact:</Text>
            <Box flexDirection="column" marginLeft={2}>
                <Text>
                    <Text color="blue">GitHub:</Text> <Text color="cyan">{profile.links.github}</Text>
                </Text>
                <Text>
                    <Text color="blue">LinkedIn:</Text> <Text color="cyan">{profile.links.linkedin}</Text>
                </Text>
                <Text>
                    <Text color="blue">Email:</Text> <Text color="cyan">{profile.links.email}</Text>
                </Text>
            </Box>
        </Box>
    </Box>
);

export default ProfileTable; 