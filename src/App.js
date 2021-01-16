import PostsList from './components/PostsList/PostsList';
import SearchInput from './components/SearchInput/SearchInput';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  background-image: linear-gradient(to left, #ffcc00  40%, #f9f586 60%);
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchInput />
      <PostsList />
    </>
  );
}

export default App;
