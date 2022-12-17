import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
const PageButton = (props) => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button variant="text">{props.name}</Button>
        </Link>
    );
};
export default PageButton;