import { Box, Newline, Spacer, Text } from 'ink';
import SelectInput from 'ink-select-input';
import React, { useState } from 'react';
import { ClientService } from 'src/client/client.service.js';
import { Robot } from '../shared/robot.type.js';

import RobotDetails from './robot-details.js';
import TaskParamsForm from './task-params-form.js';
import ErrorBox from './error-box.js';
import { ClientError, StoredRobotTaskResult } from 'src/client/client.types.js';
import Spinner from 'ink-spinner';

export default function SelectedRobot({
  robot,
  clientService,
  clearApiKey,
  clearRobot,
}: {
  robot: Robot;
  clientService: ClientService;
  clearApiKey: () => void;
  clearRobot: () => void;
}) {
  const options = ['Run robot', 'Select another robot', 'Clear API Key'].map(
    (p) => ({ label: p, value: p }),
  );

  const [formVisible, setFormVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [error, setError] = useState<ClientError>();
  const [submittedTask, setSubmittedTask] = useState<StoredRobotTaskResult>();

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

  const createTask = (inputParameters: unknown) => {
    setFormVisible(false);
    setSubmitting(true);
    clientService
      .runRobot(robot.id, {
        recordVideo: false,
        inputParameters,
      })
      .then((r) => {
        setSubmitting(false);
        if (r.status !== 200) {
          setErrorTitle('Failed to submit robot task');
          setError(r);
        } else {
          setSubmittedTask(r.payload?.result);
        }
      });
  };

  return (
    <Box flexDirection="column">
      {!formVisible ? (
        <>
          <RobotDetails robot={robot} />

          <Box display={!submitting ? 'flex' : 'none'} margin={1} marginTop={0}>
            <SelectInput items={options} onSelect={handleSelect} />
          </Box>
        </>
      ) : null}

      <Spacer />

      {formVisible ? (
        <TaskParamsForm
          onSubmit={createTask}
          exitForm={() => setFormVisible(false)}
          params={robot.inputParameters}
        />
      ) : null}

      {submitting ? (
        <Text>
          <Newline />
          <Spinner type="fistBump" /> Submitting robot task ...
        </Text>
      ) : null}

      {submittedTask ? (
        <Box>
          <Text>
            Task Submitted!
            <Newline />
            ID: {submittedTask.id}
            <Newline />
            Status: {submittedTask.status}
          </Text>
        </Box>
      ) : null}

      <ErrorBox error={error} title={errorTitle} />
    </Box>
  );
}
