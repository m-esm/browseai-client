import { Box, Newline, Text } from 'ink';
import SelectInput from 'ink-select-input';
import React, { useState } from 'react';
import { Robot } from 'src/shared/robot.type.js';
import RobotDetails from './robot-details.js';
import TaskParamsForm from './task-params-form.js';

export default function SelectedRobot({
  robot,
  clearApiKey,
  clearRobot,
}: {
  clearApiKey: () => void;
  clearRobot: () => void;
  robot: Robot;
}) {
  const options = ['Run robot', 'Select another robot', 'Clear API Key'].map(
    (p) => ({ label: p, value: p }),
  );

  const [formVisible, setFormVisible] = useState(false);

  const handleSelect = ({ label }) => {
    switch (label) {
      case 'Run robot':
        setFormVisible(true);
        break;

      case 'Select another robot':
        clearRobot();
        break;

      case 'Clear API Key':
        clearApiKey();
        break;
    }
  };
  return (
    <Box>
      {!formVisible ? (
        <>
          <RobotDetails robot={robot} />
          <Newline />
          <Box margin={1} marginTop={3}>
            <SelectInput items={options} onSelect={handleSelect} />
          </Box>
        </>
      ) : null}

      {formVisible ? (
        <TaskParamsForm
          exitForm={() => setFormVisible(false)}
          params={robot.inputParameters}
        />
      ) : null}
    </Box>
  );
}
