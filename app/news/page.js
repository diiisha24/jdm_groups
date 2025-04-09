import Layout from "@/components/layout/Layout";
import NewsList from "@/components/sections/NewsList";
export default function News() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs" backgroundImage={"/assets/img/banner/blogs.jpg"}>
        <NewsList />
      </Layout>
    </>
  );
}
