import prisma from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';
const ServerAction = async () => {
  const users = await prisma.user.findMany();
  async function addTodo(formData: FormData) {
    'use server';
    let data = new Map<string, FormDataEntryValue>();
    for (let [key, value] of formData) {
      data.set(key, value);
    }
    await prisma.user.create({
      data: {
        email: data.get('name') as string,
        password: 'secret',
        name: 'default',
      },
    });
    revalidatePath('/');
  }
  return (
    <>
      <form action={addTodo}>
        <div>
          <h3>Add new to do: </h3>
          <div>
            <input
              name="name"
              type="text"
              className="dark:text-black"
            />
            <button
              type="submit"
              className="px-3 py-2 border border-rose-500 rounded-md ml-3"
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <div className="rounded-md border-rose-500 p-5 border mt-5 ">
        {users && users.map((user) => <div className="pb-3">{user.email}</div>)}
      </div>
    </>
  );
};
export default ServerAction;
