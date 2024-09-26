import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { addUser } from "../user";
import { queryClient } from "../react-query";

export default function UserAdd() {
  const mutation = useMutation({
    mutationFn: () => {
      return addUser({
        firstName,
        lastName,
        email,
      });
    },
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["user"] });

        // set user feedback
        setErrorMessage(data.message);
        setSuccessMessage(data.message);

        // reset form
        setFirstName("");
        setLastName("");
        setEmail("");
      } else if (data.status === "error") {
        setSuccessMessage("");
        setErrorMessage(data.message);
      }
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        {successMessage && <p className="text-green-300">{successMessage}</p>}
        {errorMessage && <p className="text-red-300">{errorMessage}</p>}
      </section>
    </form>
  );
}
