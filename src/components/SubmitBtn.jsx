import React from "react";

function SubmitBtn({ text }) {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
}

export default SubmitBtn;
