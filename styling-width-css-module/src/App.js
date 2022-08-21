import React, { useState } from "react";
import CheckBox from "./components/CheckBox";

const App = () => {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>cehck:</b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
};

export default App;
