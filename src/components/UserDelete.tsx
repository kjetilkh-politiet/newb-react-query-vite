import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../utils/user";
import { queryClient } from "../utils/react-query";
import { CacheTags } from "../utils/cache";

export default function UserDelete({ userId }: { userId: number }) {
	const mutation = useMutation({
		mutationFn: () => {
			return deleteUser(userId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CacheTags.users] });
		},
	});

	return (
		<span>
			<button
				type="button"
				onClick={() => {
					mutation.mutate();
				}}
				className="rounded py-1 px-2 bg-red-800"
			>
				Slett
			</button>
			{mutation.isError ? (
				<span className="text-red-300">{mutation.error.message}</span>
			) : (
				<></>
			)}
		</span>
	);
}
