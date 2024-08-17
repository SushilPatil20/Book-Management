import { useFetch } from "../utils/customHooks";
const Demo = () => {
  const { data, error, loading } = useFetch("Dipalee");
  if (error) return <p>{error}</p>;
  if (loading) return <h1 className="text-black">Loading...</h1>;
  return (
    <>
      <p>{data}</p>
    </>
  );
};

export default Demo;
