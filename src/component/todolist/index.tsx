import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import * as S from "./style";

type ItemProps = {
  itemText: string;
  onDelete: () => void;
  onUpdate: (updatedItem: string) => void;
};

const ToDo: React.FC<ItemProps> = ({ itemText, onDelete, onUpdate }) => {
  const [editedItem, setEditedItem] = useState<string>(itemText);
  const [isEditClick, setIsEditClick] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [elapsedTime, setElapsedTime] = useState<number>(0);

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

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setElapsedTime(now.getTime() - startTime.getTime());
    }, 1000);
  }, []);

  const dateSetting = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    switch (true) {
      case seconds < 60:
        return "방금 전";
      case minutes < 60:
        return `${minutes}분 전`;
      case hours < 24:
        return `${hours}시간 전`;
      case days < 7:
        return `${days}일 전`;
      case weeks < 4:
        return `${weeks}주 전`;
      case months < 12:
        return `${months}달 전`;
      default:
        return `${years}년 전`;
    }
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
        <S.TodoItem>{itemText}</S.TodoItem>
      )}
      <S.ButtonBox>
        <S.DeleteButton onPress={onDelete}>
          <S.ButtonText>삭제하기</S.ButtonText>
        </S.DeleteButton>
        <S.EditButton onPress={openEdit}>
          <S.ButtonText>수정하기</S.ButtonText>
        </S.EditButton>
        <Text>{dateSetting(elapsedTime)}</Text>
      </S.ButtonBox>
    </S.TodoItemBox>
  );
};

export const ToDoList: React.FC = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const saveUserInput = (text: string) => {
    setInputValue(text);
  };

  const handleButtonClick = () => {
    const updatedTodoList = [...todoList, inputValue];
    setTodoList(updatedTodoList);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  const handleUpdate = (index: number, updatedItem: string) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = updatedItem;
    setTodoList(updatedTodoList);
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
        {todoList.map((todo, index) => (
          <ToDo
            key={index}
            itemText={todo}
            onDelete={() => handleDelete(index)}
            onUpdate={(updatedItem) => handleUpdate(index, updatedItem)}
          />
        ))}
      </View>
    </S.ToDoBox>
  );
};
