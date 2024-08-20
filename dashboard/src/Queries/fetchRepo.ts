const fetchRepo = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch();
  if (!apiRes.ok) {
    throw new Error("fetch not ok");
  }
  return apiRes.json();
};

export default fetchRepo;
