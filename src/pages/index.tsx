import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Ui/Layout";
import Seo from "../components/Seo";

const Box = styled.div`
  grid-column: "2/3";
  grid-row: "2/5";
  background-color: "red ";
`;

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
