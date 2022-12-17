import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Home = () => {
    return (
        <div>
            <Avatar alt="GG" src="/profile.jpeg" sx={{marginLeft:'20px',width: 150, height: 150}}/>
            <Typography component={'span'} sx={{marginTop:'20px'}}>
                Hola Como estas 😀
            </Typography>
        </div>
    );
};
export default Home;