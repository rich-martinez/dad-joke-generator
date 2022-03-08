import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export const Header = () => {
    const Header = styledComponents.header`
        background-color: #e9c46a;
        font-weight: bold;
        padding: 1rem;

        ul {
            display: flex;
            gap: 2rem;
            justify-content: end;
            list-style-type: none;
            padding: 0;
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
                    <li><Link to="favorites">Favorites</Link></li>
                </ul>
            </nav>
        </Header>
    );
};
