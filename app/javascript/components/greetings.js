import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greeting/greetingSlice";

const Greeting = () => {
  const greetingMessage = useSelector((state) => state.greeting.message); // Corrected selector syntax
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h2>Random Greeting</h2>
      <p className="pt-3">{greetingMessage}</p>
    </div>
  );
};

export default Greeting;