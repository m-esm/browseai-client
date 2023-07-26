import { Box, Newline, Text } from 'ink';
import React from 'react';
import { Robot } from 'src/shared/robot.type.js';

export default function SelectedRobot({ robot }: { robot: Robot }) {
  return (
    <Box
      margin={1}
      padding={1}
      borderStyle={'round'}
      borderColor={'greenBright'}
    >
      <Text>
        Selected Robot:
        <Newline />
        <Newline />
      </Text>
      <Box margin={1} marginBottom={0}>
        <Text>
          {robot.name}
          <Newline />
          <Text italic color={'gray'}>
            {robot.id}
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
