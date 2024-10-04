import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { addUser } from "../utils/user";
import { queryClient } from "../utils/react-query";
import { CacheTags } from "../utils/cache";

export default function UserAdd() {
	const mutation = useMutation({
		mutationFn: () => {
			return addUser({
				firstName,
				lastName,
				email,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CacheTags.users] });

			// reset form
			setFirstName("");
			setLastName("");
			setEmail("");
		},
	});

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		mutation.mutate();
	};

	return (
		<form className="grid gap-6" onSubmit={onSubmit}>
			<h2 className="text-2xl">Ny bruker</h2>
			<fieldset className="grid gap-4">
				<div>
					<label>
						Fornavn:
						<input
							type="input"
							name="firstName"
							className="ml-2"
							value={firstName}
							onChange={(ev) => setFirstName(ev.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Etternavn:
						<input
							type="input"
							name="lastName"
							className="ml-2"
							value={lastName}
							onChange={(ev) => setLastName(ev.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						E-post:
						<input
							type="email"
							name="email"
							className="ml-2"
							value={email}
							onChange={(ev) => setEmail(ev.target.value)}
						/>
					</label>
				</div>
			</fieldset>
			<section className="grid gap-2">
				<button
					type="submit"
					className="rounded bg-green-800 py-1 px-3 hover:bg-green-700"
				>
					Legg til bruker
				</button>
				{mutation.isSuccess && (
					<p className="text-green-300">{mutation.data.message}</p>
				)}
				{mutation.isError && (
					<p className="text-red-300">{mutation.error.message}</p>
				)}
			</section>
		</form>
	);
}
