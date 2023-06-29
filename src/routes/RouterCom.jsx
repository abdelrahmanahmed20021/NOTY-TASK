import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompleteTask } from "../components/completeTask";
import { App } from "../App";
import { useGState } from "../context/ContextState";
import { Delete } from "../components/Delete";

export const RouterCom = () => {
  const { completeList } = useGState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="complete"
            element={<CompleteTask data={completeList} />}
          />
          <Route path="delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
