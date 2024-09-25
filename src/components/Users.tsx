import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../user";

export default function Users() {
  // Queries
  const query = useQuery({ queryKey: ["user"], queryFn: getUsers });

  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Fornavn</td>
            <td>Etternavn</td>
            <td>E-post</td>
          </tr>
        </thead>
        <tbody>
          {query.data?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
