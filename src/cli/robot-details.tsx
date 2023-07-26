import { Box, Newline, Spacer, Text } from 'ink';
import React from 'react';
import { Robot } from 'src/shared/robot.type.js';

export default function RobotDetails({ robot }: { robot: Robot }) {
  return (
    <Box
      margin={1}
      padding={1}
      borderStyle={'round'}
      borderColor={'greenBright'}
    >
      <Text>
        {robot.name}
        <Newline />
        <Newline />
        <Text italic color={'gray'}>
          {robot.id}
        </Text>
      </Text>
    </Box>
  );
}
