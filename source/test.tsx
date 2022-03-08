import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './ui';

test('conversion', t => {
	const { lastFrame } = render(<App from={16} />);

	t.is(lastFrame(), chalk`{green 1} [rem]`);
});