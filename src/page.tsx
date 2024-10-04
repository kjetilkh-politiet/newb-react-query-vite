import UserAdd from "./components/UserAdd";
import Users from "./components/Users";

export default function Page() {
	return (
		<section className="grid gap-10">
			<Users />
			<UserAdd />
		</section>
	);
}
