import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { fetchUsers, selectNeededInfo } from "./helpers";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setIsFetching(true);
      const newUsers = await fetchUsers();
      if (!ignore) setUsers(selectNeededInfo(newUsers));
      setIsFetching(false);
    })();
    return () => (ignore = true);
  }, []);

  const getNewUsers = async () => {
    setIsFetching(true);
    const newUsers = await fetchUsers();
    setUsers(selectNeededInfo(newUsers));
    setIsFetching(false);
  };

  return (
    <main className="min-h-screen bg-[#e1f7dd] py-10">
      {!isFetching ? (
        <>
          <button
            className="bg-[#f1003d] text-white text-xl font-semibold py-3 rounded-lg shadow-btn-shadow active:shadow-none active:pb-2 active:pt-4 w-72 mx-auto block"
            onClick={getNewUsers}
          >
            Fetch random
          </button>
          <div className="flex justify-center mt-8">
            <div className="flex flex-wrap justify-center gap-8">
              {users.length > 0 &&
                users.map((user) => <UserCard {...user} key={user.uid} />)}
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-xl font-semibold text-center">Fetching users...</h1>
      )}
    </main>
  );
};

export default App;
