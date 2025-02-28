import { Card } from "lib/components/elements/Card";
import { Layout } from "lib/components/layout/Layout";
import React from "react";
import { ButtonCyan } from "./lib/components/elements/Buttons/ButtonCyan";

const App: React.FC = () => {
  return (
    <Layout>
      <div>
        <ButtonCyan handleOnClick={() => true} label="TEST THIS BUTTON" />
        <Card
          title={"TEST THIS CARD!!!"}
          children={<div>DIV IN CARD!!!!</div>}
        ></Card>
      </div>
    </Layout>
  );
};

export default App;
