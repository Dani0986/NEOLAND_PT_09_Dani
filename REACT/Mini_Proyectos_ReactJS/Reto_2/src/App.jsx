
import './App.css'

import { Header, Main, Footer, Title, SubTitle, CharacterList, ItemList, Image, Paragraph } from './Components';

const App = () => {
  return (
    <>
      <Header>
        <Title text="Title" />
      </Header>
      <Main>
        <SubTitle text="SubTitle" />
        <CharacterList>
          <ItemList item={<><Paragraph text="Mini Reto" /><Image src="vite.svg" alt="Character Image" width="100" height="100" /><Paragraph text="Status" /><Paragraph text="Origin" /></>} />
        </CharacterList>
      </Main>
      <Footer>
        <Paragraph text="Created by Dani" />
        <Image src="vite.svg" alt="Footer Image" width="100" height="100" />
        <Paragraph text="Copyright" />
      </Footer>
    </>
  );
};

export default App;
