import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import {SearchBar} from '../index'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{position: 'sticky', background:'#000', top: 0, justifyContent: 'space-between', zIndex: '9999'}}
    >
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} className="logo" alt="logo" height={45} />
        <Typography sx={{
          color: {xs: '#FC1503', md: '#FFF'},
          fontSize: {xs: '16px', sm: '30px', md: '30px'},
          paddingLeft: {xs: '0px', sm: '5px', md: '10px'},
          fontWeight: 'bold',
        }}>OurTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
