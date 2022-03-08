#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ rem

	Options
		--from number (in px)

	Examples
	  $ rem --from=16 or $ rem -f=16
	  1 [rem]
`, {
	flags: {
		from: {
			type: 'number',
			isRequired: true,
			alias: 'f',
		}
	}
});

render(<App from={cli.flags.from}/>);
