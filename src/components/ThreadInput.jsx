// ThreadInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import {
  ThreadInputWrapper,
  InputGroup,
  Label,
  Input,
  Textarea,
  Button,
} from "./styled/StyledComponents";

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <ThreadInputWrapper>
      <InputGroup>
        <Label htmlFor="title">Judul</Label>
        <Input type="text" id="title" value={title} onChange={onTitleChange} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="category">Kategori</Label>
        <Input
          type="text"
          id="category"
          value={category}
          onChange={onCategoryChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="body">Masukkan Ide Kamu</Label>
        <Textarea id="body" value={body} onChange={onBodyChange} rows="4" />
      </InputGroup>
      <Button onClick={() => addThread({ title, body, category })}>
        Kirim
      </Button>
    </ThreadInputWrapper>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
