import type { NextPage } from "next";
import { styled } from "../../stitches.config";
import Layout from "../components/Ui/Layout";
import Seo from "../components/Seo";
const Box = styled("div", {
  gridColumn: "2/3",
  gridRow: "2/5",
  backgroundColor: "red ",
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Cardápio Digital" description="Cardápio Digital" />
      <Box>
        <div style={{ height: "200px" }}>
          <h1>testando</h1>
        </div>
        <div style={{ height: "200px" }}>
          <h1>testando</h1>
        </div>
        <div style={{ height: "200px" }}>
          <h1>testando</h1>
        </div>
        <div style={{ height: "200px" }}>
          <h1>testando</h1>
        </div>
        <div style={{ height: "200px" }}>
          <h1>testando</h1>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
