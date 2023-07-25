import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Box, Newline, render, Text } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';

@Injectable()
export class CliService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    const ranWithArgs = !!process.argv.find((p) => !p.includes('/'));

    render(
      <>
        <Gradient name="retro">
          <BigText text="Browse AI" font="chrome" align="left" space={true} />
        </Gradient>

        {!ranWithArgs ? (
          <Box padding={2} paddingTop={0}>
            <Text>
              To start with Browse AI cli, you need an API key
              <Newline />
              <Newline />
              More info at https://dashboard.browse.ai/teams/personal/api
            </Text>

            <Text></Text>
          </Box>
        ) : null}
      </>,
    );
  }
}
