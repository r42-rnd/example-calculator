import styled from "styled-components";

export const BaseButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: black;
  border: 0;
  color: white;
  font-size: 24px;
  margin: 4px;
`;

type ButtonProps = {
  screen: string;
  value: string;
  setScreen: (screen: string) => void;
  onClick?: () => void;
};

export const Button = ({ screen, setScreen, value, onClick }: ButtonProps) => {
  return (
    <BaseButton
      onClick={() => {
        if (onClick) {
          onClick();

          return;
        } else {
          setScreen(`${screen}${value}`);
        }
      }}
    >
      {value}
    </BaseButton>
  );
};
