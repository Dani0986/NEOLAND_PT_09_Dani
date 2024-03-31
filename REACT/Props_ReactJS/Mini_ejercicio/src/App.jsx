
import './App.css'

import { Title, SubTitle, Image, Paragraph } from './components';

const App = () => {
  return (
    <div>
      <Title text="Welcome to My Blog" />
      <SubTitle text="About Me" />
      <Image src="profile.jpg" alt="Profile Picture" width={200} height={200} />
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consectetur neque, in placerat massa malesuada vel." />
      <SubTitle text="My Recent Posts" />
      <Image src="post1.jpg" alt="Post 1" width={400} height={300} />
      <Paragraph text="Post 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Image src="post2.jpg" alt="Post 2" width={400} height={300} />
      <Paragraph text="Post 2: Sed euismod consectetur neque, in placerat massa malesuada vel." />
    </div>
  );
};

export default App;