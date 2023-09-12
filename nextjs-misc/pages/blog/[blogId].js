const { default: Head } = require("next/head");

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Artcile {process.env.NEXT_PUBLIC_ID}</h1>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASSWORD;

  console.log(user, pass);
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
