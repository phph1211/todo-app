import React, { useState, ChangeEvent } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as S from "./style";

type ItemProps = {
  item: string;
  onDelete: () => void;
  onUpdate: (updatedItem: string) => void;
};

const ToDo: React.FC<ItemProps> = ({ item, onDelete, onUpdate }) => {
  const [editedItem, setEditedItem] = useState<string>(item);
  const [isEditClick, setIsEditClick] = useState<boolean>(false);

  const openEdit = () => {
    setIsEditClick(true);
  };

  const handleEditChange = (text: string) => {
    setEditedItem(text);
  };

  const handleEditText = () => {
    setIsEditClick(false);
    onUpdate(editedItem);
  };

  return (
    <S.TodoItemBox>
      {isEditClick ? (
        <S.TodoInput
          style={{ width: 200, height: 50, borderWidth: 1, marginBottom: 10 }}
          value={editedItem}
          placeholder="수정할 텍스트를 입력하세요"
          onChangeText={handleEditChange}
          onBlur={handleEditText}
        />
      ) : (
        <S.TodoItem>{item}</S.TodoItem>
      )}
      <S.ButtonBox>
        <S.DeleteButton onPress={onDelete}>
          <S.ButtonText>삭제하기</S.ButtonText>
        </S.DeleteButton>
        <S.EditButton onPress={openEdit}>
          <S.ButtonText>수정하기</S.ButtonText>
        </S.EditButton>
      </S.ButtonBox>
    </S.TodoItemBox>
  );
};

export const ToDoList: React.FC = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const saveUserInput = (text: string) => {
    setInputValue(text);
  };

  const handleButtonClick = () => {
    const updatedTodo = [...todo, inputValue];
    setTodo(updatedTodo);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  const handleUpdate = (index: number, updatedItem: string) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = updatedItem;
    setTodo(updatedTodo);
  };

  return (
    <S.ToDoBox>
      <S.Title>This is TodoList!</S.Title>
      <S.GenerateBox>
        <S.TodoInput
          value={inputValue}
          placeholder="입력하세요"
          onChangeText={saveUserInput}
          style={{ borderWidth: 1, marginBottom: 10 }}
        />
        <S.MakeToDoButton onPress={handleButtonClick}>
          <S.ButtonText>Todo 추가하기</S.ButtonText>
        </S.MakeToDoButton>
      </S.GenerateBox>
      <View style={{ marginTop: 20, width: "100%" }}>
        {todo.map((todo, index) => (
          <ToDo
            key={index}
            item={todo}
            onDelete={() => handleDelete(index)}
            onUpdate={(updatedItem) => handleUpdate(index, updatedItem)}
          />
        ))}
      </View>
    </S.ToDoBox>
  );
};
