import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    try {
      const res = await fetch('http://localhost:3000/greetings/greeting');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data.greeting;
    } catch (error) {
      console.error('Error fetching greeting:', error);
      throw error; // Rethrow the error to be caught by the component or further handled
    }
  },
);

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      return {...state, message: action.payload}
    });
  },
});

export default greetingSlice.reducer;