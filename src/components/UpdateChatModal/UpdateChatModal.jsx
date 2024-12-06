import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateChatThunk } from "../../store/Chat/operations";
import ModalWindow from "../Modal/ModalWindow";
import { useDialogClose } from "../../hooks/useDialogClose";
import {
  Form,
  FormBtn,
  FormHeading,
  FormInput,
  FormLabel,
} from "../CommonStyledComponents/CommonStyledComponents";

const UpdateChatModal = ({ onClose, chat, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { chatName: chat?.name || "" },
  });

  const dispatch = useDispatch();
  useDialogClose({ isOpen, onClose });

  const onSubmit = (data) => {
    const { chatName } = data;
    if (chatName.trim()) {
      dispatch(updateChatThunk({ chatId: chat._id, name: chatName }));
      onClose();
    } else {
      alert("Chat name cannot be empty!");
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWindow onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Update chat</FormHeading>
        <FormLabel>
          Chat Name
          <FormInput
            type="text"
            placeholder="Enter new chat name"
            {...register("chatName", { required: "Chat name is required" })}
            $error={errors.chatName}
          />
          {errors.chatName && <span>{errors.chatName.message}</span>}
        </FormLabel>
        <FormBtn type="submit">Save changes</FormBtn>
      </Form>
    </ModalWindow>
  );
};

export default UpdateChatModal;
