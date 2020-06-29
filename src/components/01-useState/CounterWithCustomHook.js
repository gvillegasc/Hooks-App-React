import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter(100);
	return (
		<div>
			<h1>Counter with Hook: {state}</h1>
			<hr></hr>

			<button onClick={() => increment(2)} className="btn btn-success">
				+ 1
			</button>
			<button onClick={reset} className="btn btn-warning">
				Reset
			</button>
			<button onClick={() => decrement(2)} className="btn btn-danger">
				- 1
			</button>
		</div>
	);
};
