import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const SignInButton = () => {
  return (
    <Button>
      <Link to='/signin'>
        <AccountCircleOutlinedIcon />
        SIGN IN
      </Link>
    </Button>
  )
}

export default SignInButton;
