import { createSlice } from "@reduxjs/toolkit";
import type { TempAnomalyData } from "./dataTypes";
import JSONdata from "../assets/tempanomaly_4x4grid_v2.json"

export type DataStore = {
    tempData : TempAnomalyData;
} 

const initialState: DataStore = {
    tempData: JSONdata as TempAnomalyData,
}

const dataSlice = createSlice({
    name: 'tempData',
    initialState : initialState,
    reducers: {}
});

export const { } = dataSlice.actions;
export default dataSlice.reducer;