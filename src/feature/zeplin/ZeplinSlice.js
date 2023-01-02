import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
var baseUrl =
  // "https://cors-anywhere.herokuapp.com/https://crudapi.co.uk/api/v1/";
  "http://localhost:3001/api/";
var header = {
  "Content-Type": "application/json",
  Authorization: "Bearer -x4lh2uQVDw6APz677MEC_c8gFZd3BnjxX5MHFUXi1_qGCA7NQ",
};

const initialState = {
  mission: [],
  story: [],
  hours: [],
  isLoading: true,
};
export const getMission = createAsyncThunk(
  "mission/missionItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "mission",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getStory = createAsyncThunk(
  "story/storyData",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "story",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getHours = createAsyncThunk(
  "hours/hoursData",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "hours",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addStory = createAsyncThunk(
  "story/storydata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "story",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addHours = createAsyncThunk(
  "story/storydata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "hours",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const ZeplinSlice = createSlice({
  name: "mission",
  initialState,
  extraReducers: {
    [getMission.pending]: (state) => {
      state.isLoading = true;
    },
    [getMission.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mission = action.payload;
    },
    [getMission.rejected]: (state) => {
      state.isLoading = false;
    },
    [getStory.pending]: (state) => {
      state.isLoading = true;
    },
    [getStory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.story = action.payload;
    },
    [getStory.rejected]: (state) => {
      state.isLoading = false;
    },
    [getHours.pending]: (state) => {
      state.isLoading = true;
    },
    [getHours.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hours = action.payload;
    },
    [getHours.rejected]: (state) => {
      state.isLoading = false;
    },
    [addStory.pending]: (state) => {
      state.isLoading = true;
    },
    [addStory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addStory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default ZeplinSlice.reducer;
