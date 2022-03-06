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
                    <li>Home</li>
                    <li>Favorites</li>
                </ul>
            </nav>
        </Header>
    );
};
