import { getSession, useSession } from "next-auth/react";

const blog = ({ data }) => {
  const { data: session } = useSession();
  console.log({ session });
  return <h1>blog - {data}</h1>;
};

export default blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
