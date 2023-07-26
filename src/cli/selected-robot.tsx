import { Box, Newline, Text } from 'ink';
import SelectInput from 'ink-select-input';
import React from 'react';
import { Robot } from 'src/shared/robot.type.js';

export default function SelectedRobot({
  robot,
  clearApiKey,
  clearRobot,
}: {
  clearApiKey: () => void;
  clearRobot: () => void;
  robot: Robot;
}) {
  const options = [
    'Run with default parameters',
    'Run with custom parameters',
    'Select another robot',
    'Clear API Key',
  ].map((p) => ({ label: p, value: p }));

  const handleSelect = ({ label }) => {
    console.log(label);
    switch (label) {
      case 'Run with default parameters':
        break;

      case 'Run with custom parameters':
        break;

      case 'Select another robot':
        console.log('clearRobot');
        clearRobot();
        break;

      case 'Clear API Key':
        console.log('clearApiKey');
        clearApiKey();
        break;
    }
  };
  return (
    <Box>
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
      <Newline />
      <Box margin={1} marginTop={3}>
        <SelectInput items={options} onSelect={handleSelect} />
      </Box>
    </Box>
  );
}
