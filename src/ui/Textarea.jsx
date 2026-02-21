import styled from "styled-components";

export const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`;

function TextArea() {
  return (
    <textarea className="px-[0.8rem] py-[1.2rem] border border-(--color-grey-300) rounded-lg bg-(--color-grey-0) w-full h-32">
      textarea
    </textarea>
  );
}

export default TextArea;
