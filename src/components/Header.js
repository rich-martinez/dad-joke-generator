import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export const Header = () => {
    const Header = styledComponents.header`
        ul {
            display: flex;
            gap: 2rem;
            justify-content: center;
            list-style-type: none;
        }

        li:hover {
            color: #ff0000;
            cursor: pointer;
        }
    `;

    return (
        <Header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </Header>
    );
};
