function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of new article</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log("Pre-rendering NewsArticleList");
  return {
    props: {
      articles: data,
    },
  };
}
