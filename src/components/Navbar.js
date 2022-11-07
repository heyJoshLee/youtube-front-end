import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";
import SignInButton from "./SignInButton";
const Navbar = () => {

  const Container = styled.div`
    position: sticky;
    top: 0;
    backgroundColor: ${(theme) => theme.bgLighter};
    height: 56px;

  `

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    justify-content: flex-end;
    position: relative;
  `



  const Search = styled.div`
    position: absoulte;
    width: 40%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  `

  const Input = styled.input`
    border: none;
    background-color: transparent;
  `

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='search' />
          <SearchOutlinedIcon />
        </Search>
        <Container />
        <SignInButton />
      </Wrapper>
    </Container>
  )
}

export default Navbar;