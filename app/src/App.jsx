import styled from "styled-components";

const App = () => {
  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.png" alt="logo" style={{height:"5em"}}/>
      </div>

      <div className="search">
         <input placeholder="Search Food" />
      </div>
    </TopContainer>

  <FilterContainer>
    <Button>All</Button>
    <Button>All</Button>
    <Button>All</Button>
    <Button>All</Button>
 
  </FilterContainer>
    
  </Container>
};

export default App;

const Container = styled.div`
max-width:1200px;
margin:0 auto;
`;
const TopContainer = styled.section`
min-height:140x;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;

.search{
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    height:48px;
    font-size:16px;
    padding: 0 10px
  }
}

`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background:#ff4343;
  border-radius:5px;
  padding:6px 12px;
`;