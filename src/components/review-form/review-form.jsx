import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onAddressChange, clear } =
    useForm();

  const { name, text, address } = form;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Address</span>
        <input
          type="text"
          value={address}
          onChange={(event) => {
            onAddressChange(event.target.value);
          }}
        />
      </div>
      <button onClick={clear}>clear</button>
    </form>
  );
};
