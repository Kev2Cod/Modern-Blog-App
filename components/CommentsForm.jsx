import React, { useState, useEffect, useRef } from "react";

const CommentsForm = () => {
  // useState
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // UseRef
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div>
      <h1>Comments Form</h1>
    </div>
  );
};

export default CommentsForm;
