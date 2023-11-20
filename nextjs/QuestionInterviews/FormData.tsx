'use client';
import Container from '@/components/ui/Container';
import { ChangeEvent, FormEvent, useState } from 'react';

const FormData = () => {
  const [data, setData] = useState<Record<string, any>>({
    name: '',
    password: '',
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* validate */
    for (let e of Object.keys(data)) {
      if (!data[e]) {
        alert(`Missing ${e}`);
        return;
      }
    }
    alert(`Name ${data.name}, password: ${data.password}`);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="text-white"
        >
          Name:{' '}
        </label>

        <input
          name="name"
          value={data.name}
          onChange={onChange}
          id="name"
        />
        <label
          htmlFor="password"
          className="text-white"
        >
          Password:{' '}
        </label>

        <input
          id="password"
          name="password"
          value={data.password}
          onChange={onChange}
        />
        <button
          type="submit"
          className="text-white"
        >
          Submit
        </button>
      </form>
    </Container>
  );
};
export default FormData;
