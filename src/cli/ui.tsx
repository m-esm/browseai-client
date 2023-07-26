import { Box } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';
import { useState } from 'react';

import { ClientService } from '../client/client.service.js';
import { ConfigService } from '../common/config/config.service.js';
import ApiKeyInput from './api-key-input.js';
import SelectRobot from './select-robot.js';
import { Robot } from 'src/shared/robot.type.js';
import SelectedRobot from './selected-robot.js';

export default function UI({
  configService,
  clientService,
}: {
  configService: ConfigService;
  clientService: ClientService;
}) {
  const ranWithArgs = !!process.argv.find((p) => !p.includes('/'));
  const [config, setConfig] = useState(configService.config);
  const setApiKey = async (apiKey: string) => {
    setConfig({ ...config, apiKey });
    configService.patch({ apiKey });
  };

  const setRobot = async (robot: Robot) => {
    setConfig({ ...config, robot });
    configService.patch({ robot });
  };

  const clearApiKey = () => {
    return configService
      .patch({ robot: null, apiKey: null })
      .then((config) => setConfig(config));
  };

  const clearRobot = () => {
    return configService
      .patch({ robot: null })
      .then((config) => setConfig(config));
  };

  return (
    <>
      <Gradient name="retro">
        <BigText text="Browse AI" font="chrome" align="left" space={true} />
      </Gradient>
      {!ranWithArgs ? (
        <Box padding={2} paddingTop={0}>
          {!config.apiKey ? <ApiKeyInput onSet={setApiKey} /> : null}

          {config.apiKey && !config.robot ? (
            <SelectRobot
              clientService={clientService}
              onSelect={(robot) => setRobot(robot)}
            />
          ) : null}

          {config.robot ? (
            <SelectedRobot
              clearApiKey={clearApiKey}
              clearRobot={clearRobot}
              robot={config.robot}
            />
          ) : null}
        </Box>
      ) : null}
    </>
  );
}
