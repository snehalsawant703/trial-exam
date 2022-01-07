import { Tweet } from "./Tweet";
import { Delete } from "./Delete";
import { useState } from "react";

export function Comp() {
  return (
    <div>
      <Tweet />
      <Delete />
    </div>
  );
}