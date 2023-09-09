import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greeting/greetingSlice";

const Greeting = () => {
  const greetingMessage = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(getRandomGreeting());
  }

  return (
    <div>
      <h2>Random Greeting</h2>
      <p className="greeting">{greetingMessage.message}</p>
      <button type="button" onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Greeting;