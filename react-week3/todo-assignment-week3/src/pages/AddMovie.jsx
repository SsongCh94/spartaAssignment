import Inputs from "../redux/components/Inputs";
import Buttons from "../redux/components/Buttons";
import { StForm } from "./AddMovie.style";
import { useInput } from "../Hooks/useInput";
import api from "../axios/api";

function AddMovie() {
  const [writer, handleWriter] = useInput("");
  const [URL, handleURL] = useInput("");
  const [title, handleTitle] = useInput("");
  const [star, handleStar] = useInput("");
  const [content, handleContent] = useInput("");

  const newMovie = {
    writer,
    URL,
    title,
    star,
    content,
    comments: [
      {
        content: null,
      },
    ],
  };

  const onSubmitBtnHandler = async () => {
    api.post("/posts", newMovie);
  };

  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitBtnHandler();
      }}
    >
      <h2>작성자</h2>
      <Inputs
        size={"medium"}
        placeholder={"작성자 이름 (5자 이내)"}
        value={writer}
        onChange={handleWriter}
        type={"text"}
      />
      <h2>URL</h2>
      <Inputs
        size={"medium"}
        placeholder={"URL"}
        value={URL}
        onChange={handleURL}
        type={"url"}
      />
      <h2>제목</h2>
      <Inputs
        size={"medium"}
        placeholder={"제목 (50자 이내)"}
        value={title}
        onChange={handleTitle}
      />
      <h2>별점</h2>
      <Inputs
        size={"medium"}
        placeholder={"select로 바꾸기"}
        value={star}
        onChange={handleStar}
      />
      <h2>감상평</h2>
      <Inputs
        size={"large"}
        placeholder={"내용 (200자 이내)"}
        value={content}
        onChange={handleContent}
      />
      <Buttons>기록하기</Buttons>
    </StForm>
  );
}

export default AddMovie;
