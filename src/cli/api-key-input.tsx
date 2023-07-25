import { Box, Newline, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import React, { useState } from 'react';

export default function ApiKeyInput({
  onSet,
}: {
  onSet: (apiKey: string) => void;
}) {
  const [value, setValue] = useState('');

  useInput((input, key) => {
    if (key.return) {
      onSet(value);
    }
  });

  return (
    <>
      <Text>
        To start with Browse AI cli, you need an API key
        <Newline />
        <Newline />
        More info at https://dashboard.browse.ai/teams/personal/api
        <Newline />
        <Newline />
        <Newline />
        <Text>Enter your API token: </Text>
        <TextInput value={value} mask={'*'} onChange={setValue} />
      </Text>
    </>
  );
}
