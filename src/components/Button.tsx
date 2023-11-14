/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface ButtonProps {
  color?: string;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  min-width: 120px;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.color || "#757575"};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  transition: background0color 0.3s, box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.85;
  }
`;

Button.defaultProps = {
  color: "#757575",
};

export default Button;