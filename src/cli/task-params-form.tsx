import { Box, Text, Newline, useInput } from 'ink';
import TextInput from 'ink-text-input';
import React, { useState } from 'react';

import { TaskInputParameters } from '../client/client.types.js';
import SelectInput from 'ink-select-input';

export default function TaskParamsForm({
  params,
  exitForm,
}: {
  params: TaskInputParameters[];
  exitForm: () => void;
}) {
  const [form, setForm] = useState({});
  const [inputSubmitted, setInputSubmitted] = useState<{
    [key: string]: boolean;
  }>({});

  const formOptions = ['Submit', 'Start over', 'Exit'].map((p) => ({
    label: p,
    value: p,
  }));

  const handleSelect = ({ label }) => {
    switch (label) {
      case 'Submit':
        break;

      case 'Start over':
        setInputSubmitted({});
        break;

      case 'Exit':
        exitForm();
        break;
    }
  };

  return (
    <>
      {params.map((p, i) => {
        if (inputSubmitted[p.name])
          return (
            <Box key={p.name}>
              <Text>
                {i + 1}. {p.label}: {form[p.name]}
              </Text>
            </Box>
          );

        return (
          <Box key={p.name}>
            <Text>
              {i + 1}. {p.label}:{'  '}
            </Text>
            <TextInput
              onSubmit={(v) => {
                setForm({ ...form, [p.name]: v });
                setInputSubmitted({ ...inputSubmitted, [p.name]: true });
              }}
              value={form[p.name] || p.defaultValue}
              onChange={(v) => setForm({ ...form, [p.name]: v })}
            />
          </Box>
        );
      })}

      {params.every((p) => inputSubmitted[p.name]) ? (
        <Box margin={2}>
          <SelectInput items={formOptions} onSelect={handleSelect} />
        </Box>
      ) : null}
    </>
  );
}
