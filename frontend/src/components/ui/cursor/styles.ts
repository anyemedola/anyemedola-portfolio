import { styled } from "@mui/material/styles";

export const CursorWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: 40,
  height: 40,
  pointerEvents: "none",
  zIndex: 9999,

  backgroundImage: "url('/lemon-cursor.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",

  willChange: "transform",
  backfaceVisibility: "hidden",
});