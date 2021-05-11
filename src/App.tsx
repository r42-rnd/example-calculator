import React, { useState } from "react";
import "./App.css";
import { Screen } from "./components/Screen";
import { Body } from "./components/Body";
import { Button } from "./components/Button";
import {
  Keyboard,
  NumberKeyboard,
  CommandKeyboard,
} from "./components/Keyboard";

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
const operators = ["+", "-", "*", "/"];

function App() {
  const [screen, setScreen] = useState("");

  return (
    <Body>
      <Screen>{screen}</Screen>
      <Keyboard>
        <NumberKeyboard>
          {buttons.map((counter) => {
            return (
              <Button
                key={counter}
                screen={screen}
                setScreen={setScreen}
                value={counter.toString()}
              />
            );
          })}
        </NumberKeyboard>
        <CommandKeyboard>
          {operators.map((operator) => {
            return (
              <Button
                key={operator}
                screen={screen}
                setScreen={setScreen}
                value={operator}
              />
            );
          })}
          <Button
            screen={screen}
            setScreen={setScreen}
            value="="
            onClick={() => {
              const expr = screen;

              // eslint-disable-next-line no-eval
              const result = eval(expr);

              setScreen(`${screen}=${result || ""}`);
            }}
          />
          <Button
            screen={screen}
            setScreen={setScreen}
            value="CE"
            onClick={() => {
              setScreen("");
            }}
          />
        </CommandKeyboard>
      </Keyboard>
    </Body>
  );
}

export default App;
