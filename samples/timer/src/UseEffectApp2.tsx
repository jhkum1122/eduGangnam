import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
// clean up 예제
function UseEffectApp2() {
    const [showTimer, setShowTimer] = useState(false);

    return (<div>
        {showTimer && <Timer/>}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>)
}

export default UseEffectApp2;