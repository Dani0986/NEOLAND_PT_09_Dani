
import './App.css'

import { Header, Main, Footer, Title, SubTitle, Image, Paragraph } from "./Components/index";

function App() {
  return (
    <div>
      <Header>
        <Title text="Header Title" />
      </Header>
      <Main>
        <Title text="Main Title" />
        <SubTitle text="Main Subtitle" />
        <Image src="vite.svg" alt="Image Alt Text" width={200} height={150} />
        <Paragraph text="Main Paragraph Text" />
      </Main>
      <Footer>
        <Title text="Footer Title" />
      </Footer>
    </div>
  );
}

export default App;
