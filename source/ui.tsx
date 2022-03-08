import React, {FC} from 'react';
import {Text} from 'ink';

const App: FC<{from: number}> = ({
	from
}) => {
	if (Number.isNaN(from)) {
		return (<Text color="red">Please enter a valid number</Text>)
	}

	const convertedValue = from / 16;

	return (
		<Text>
			<Text color="green">{convertedValue}</Text> [rem]
		</Text>
	)
};

module.exports = App;
export default App;
