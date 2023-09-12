function News({ data }) {
  return <h1 className="content">{data}</h1>;
}

export default News;

export async function getStaticProps(context) {
  const { preview, previewData } = context;
  console.log(previewData);
  return {
    props: {
      data: preview ? "List of draft atricles" : "List of published articles",
    },
  };
}
