import { useEffect, useState } from "react";

const dashboard = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/dashboard");
      const out = await res.json();
      setData(out);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default dashboard;
