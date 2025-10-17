import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [state, setState] = useState(3); //1 :start, 2:pause, 3:reset
  const value = useRef(null);
  useEffect(() => {
    if (state === 1) {
      value.current = setInterval(() => {setSecond((prev) => prev+1)}, 1000);
    }else if(state ===2){
      clearInterval(value.current);
      value.current=null;
    }else if(state ===3){
      clearInterval(value.current)

      setSecond(0)
    }
  }, [state]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-4xl p-4 bg-gray-300">
      <div className="Clock w-3/4   bg-gray-500">
        <p className="text-center py-2 "> Lets Start timer</p>
        <strong className="p-2 flex justify-center  ">Timer : {second}</strong>
        <div className="m-2 p-4  flex items-center justify-around">
          <button
            className="button cursor-pointer bg-black text-white p-2 rounded-md"
            onClick={() => setState(1)}
          >
            Start
          </button>
          <button
            className="button cursor-pointer bg-black text-white p-2 rounded-md"
            onClick={() => setState(2)}
          >
            Pause
          </button>
          <button
            className="button cursor-pointer bg-black text-white p-2 rounded-md"
            onClick={() => setState(3)}
          >
            End
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
