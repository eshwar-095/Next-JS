import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const { data: session } = getSession({ req });

  if (!session) {
    res.status(401).json({ error: "Unauthenicated User" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
};

export default handler;
