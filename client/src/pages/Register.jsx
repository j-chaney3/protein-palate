import { useState } from 'react';

export default function Register() {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const registerUser = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={registerUser}>
				<label className="px-1">Name:</label>
				<input
					className="border rounded px-1"
					type="text"
					placeholder="name"
					value={data.name}
					onChange={(e) => setData({ ...data, name: e.target.value })}
				/>
				<label className="px-1">Email:</label>
				<input
					className="border rounded px-1"
					type="email"
					placeholder="email"
					value={data.email}
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>
				<label className="px-1">Password:</label>
				<input
					className="border rounded px-1"
					type="password"
					placeholder="password"
					value={data.password}
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 mx-2 rounded text-m"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
