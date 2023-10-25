import { useState } from "react";
function Emoji() {
  const [emoji, setEmoji] = useState("😏");
 
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood) // will be the previous/old value, not 'ecstatic'
    // since the re-render has been triggered but not yet completed
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed"){

     newMood = "giving up"};
    setMood(newMood);
  };
  return (
    <div className="MoodChanger componentBox">
      Current Emoji: {emoji}
      {/* Using arrow functions */}
      <button onClick={() => setEmoji("😭")}>Stay Up Late</button>
      <button onClick={()=> setEmoji("😏")}>Back to Normal</button>
      {/* Using custom event handler functions 
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>*/}
    </div>
  );
}
export default Emoji;
