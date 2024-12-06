import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addChatThunk } from "../../store/Chat/operations";
import ModalWindow from "../Modal/ModalWindow";
import {
  Form,
  FormBtn,
  FormHeading,
  FormInput,
  FormLabel,
} from "../CommonStyledComponents/CommonStyledComponents";

const AddChatModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { newChatName } = data;
    if (newChatName.trim()) {
      dispatch(addChatThunk(newChatName));
      onClose();
    } else {
      alert("Chat name cannot be empty!");
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWindow onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Add Chat</FormHeading>
        <FormLabel>
          Chat Name
          <FormInput
            type="text"
            placeholder="Enter chat name"
            {...register("newChatName", { required: "Chat name is required" })}
            $error={errors.newChatName}
          />
          {errors.newChatName && <span>{errors.newChatName.message}</span>}
        </FormLabel>
        <FormBtn type="submit">Add Chat</FormBtn>
      </Form>
    </ModalWindow>
  );
};

export default AddChatModal;
