import { Box } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';
import { useState } from 'react';

import ApiKeyInput from './api-key-input.js';
import { ConfigService } from 'src/common/config/config.service.js';

export default function UI({
  configService,
}: {
  configService: ConfigService;
}) {
  const ranWithArgs = !!process.argv.find((p) => !p.includes('/'));
  const [config, setConfig] = useState(configService.config);
  const setApiKey = async (apiKey: string) => {
    setConfig({ ...config, apiKey });
    configService.patch({ apiKey });
  };
  return (
    <>
      <Gradient name="retro">
        <BigText text="Browse AI" font="chrome" align="left" space={true} />
      </Gradient>
      {!ranWithArgs ? (
        <Box padding={2} paddingTop={0}>
          {!config.apiKey ? <ApiKeyInput onSet={setApiKey} /> : null}
        </Box>
      ) : null}
    </>
  );
}
