import Box from '@mui/material/Box';
import PageButton from './page-button';
const Navbar = () => {
    return (
            <Box sx={{width:'100%',mt:'50px'}}>
                <Box sx={{borderRadius:3,backgroundColor:'rgb(241,157,71)',height: 40,margin:'auto',alignContent:'center',display:'flex'}}>
                    <PageButton link={"/"} name={"Me"}>Me</PageButton>
                    <PageButton link={"/projects"} name={"Projects"}>Projects</PageButton>
                    <PageButton link={"/hireme"} name={"Hireme"}>Hireme</PageButton>
                </Box>
            </Box>
    );
};
export default Navbar;