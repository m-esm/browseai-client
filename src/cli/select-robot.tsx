import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import Spinner from 'ink-spinner';
import { useEffect, useState } from 'react';
import React from 'react';
import { ClientService } from 'src/client/client.service.js';
import { Robot } from 'src/shared/robot.type.js';

import ErrorBox from './error-box.js';

export default function SelectRobot({
  clientService,
  onSelect,
}: {
  clientService: ClientService;
  onSelect: (robot: Robot) => void;
}) {
  const [robots, setRobots] = useState<Robot[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    clientService.getRobots().then((res) => {
      if (res.status !== 200) setError(res);
      else setRobots(res.payload.robots.items);
    });
  }, []);

  const handleSelect = ({ value }) => {
    onSelect(robots.find((p) => p.id === value));
  };

  const options = robots?.map(({ name: label, id: value }) => ({
    label,
    value,
  }));

  return (
    <>
      {!robots && !error ? (
        <Text>
          <Spinner type="fistBump" /> Fetching robots
        </Text>
      ) : null}

      {robots ? (
        <Box>
          <Text>Select a robot:</Text>
          <Box alignSelf="flex-end" marginTop={2}>
            <SelectInput items={options} onSelect={handleSelect} />
          </Box>
        </Box>
      ) : null}

      <ErrorBox title="Failed to fetch robots" error={error} />
    </>
  );
}
