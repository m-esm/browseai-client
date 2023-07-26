import { Box, Newline, Text } from 'ink';
import React from 'react';

import { ClientError } from '../client/client.types.js';

export default function ErrorBox({
  title,
  error,
}: {
  title: string;
  error: ClientError;
}) {
  if (!error) return;

  return (
    <Box borderColor={'red'} borderStyle={'classic'} padding={1}>
      <Text color={'redBright'}>
        {title}
        <Newline />
        <Newline />
        Status: {error?.status}
        <Newline />
        Endpoint: {error?.url}
        <Newline />
        Payload:
        <Newline />
        {JSON.stringify(error?.payload, null, 2)}
      </Text>
    </Box>
  );
}
