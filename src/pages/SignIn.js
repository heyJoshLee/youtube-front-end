import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh-56px);
  color: ${(theme) => theme.theme.text};
`


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh-56px);
  background-color: ${(theme) => theme.theme.bgLighter};
  border: 1px solid ${(theme) => theme.theme.soft};
  padding: 20px 50px;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 24px;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`

const Input = styled.input`
  border: 1px solid ${(theme) => theme.theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${(theme) => theme.theme.soft};
  color: ${(theme) => theme.theme.textSoft};
`

const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${(theme) => theme.theme.textSoft};
  margin-top: 10px;
`

const Links = styled.div`
   margin-left: 50px;
`

const Link = styled.span`
  margin-left: 30px;
`

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Sign In
        </Title>
        <SubTitle>
          to continue to YouTube
        </SubTitle>
        <Input placeholder='username' />
        <Input type='password' placeholder='password' />
        <Button> Sign in</Button>
        <Title> or </Title>
        <Input placeholder='username' />
        <Input type='email' placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button> Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn;