import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../user";
import UserDelete from "./UserDelete";

export default function Users() {
  // Queries
  const query = useQuery({ queryKey: ["user"], queryFn: getUsers });

  return (
    <section>
      <table className="data-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Fornavn</td>
            <td>Etternavn</td>
            <td>E-post</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {query.data?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <UserDelete userId={user.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
