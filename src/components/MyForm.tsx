import { useState } from 'react';
import socket from 'src/helpers/socket.io';
import { EventEmitter } from 'stream';

export function MyForm() {
	const [value, setValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsLoading(true);

		socket().timeout(5000).emit('create-something', value, () => {
			setIsLoading(false);
		});
	}

	return (
		<form onSubmit={onSubmit}>
			<input onChange={(e) => setValue(e.target.value)} />

			<button type="submit" disabled={isLoading}>
				Submit
			</button>
		</form>
	);
}
