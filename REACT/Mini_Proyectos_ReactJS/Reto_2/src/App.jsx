
import './App.css'

import {
  Header, 
  Main, 
  Footer,
  Title, 
  SubTitle,
  CharacterList,
  ItemList,
  Image,
  Paragraph } from './components/index';

const App = () => {
  return (
    <>
      <Header>
        <Title text="Title" />
      </Header>
      <Main>
        <SubTitle text="SubTitle" />
        <CharacterList>
          <ItemList item={<><Paragraph text="Name" /><Image src="character_image_url" alt="Character Image" width="100" height="100" /><Paragraph text="Status" /><Paragraph text="Origin" /></>} />
        </CharacterList>
      </Main>
      <Footer>
        <Paragraph text="Created by name" />
        <Image src="footer_image_url" alt="Footer Image" width="100" height="100" />
        <Paragraph text="Copyright" />
      </Footer>
    </>
  );
};

export default App;
