import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
const dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <h1>dashboard</h1>;
};

export default dashboard;
