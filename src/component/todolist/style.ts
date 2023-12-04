import styled from "styled-components";
import Styled from "styled-components/native";

export const ToDoBox = Styled.View`
  margin-top: 40px;
  display: flex;
`;

export const Title = Styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const GenerateBox = Styled.View` 
  display: flex;
  align-items: center;
`;

export const TodoInput = Styled.TextInput` 
  width: 80%;
  height: 50px;
  border-radius: 13px;
  padding: 0 10px;
`;

export const MakeToDoButton = Styled.TouchableOpacity`
  width: 120px;
  background-color: #3498db;
  height: 40px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoItemBox = Styled.View` 
  display: flex;
    align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 170px;
`;

export const TodoItem = Styled.Text`
  font-size: 23px;
  display: flex;
  padding: 10px 0;
  text-align: center;
  border: 3px solid gainsboro;
  width: 80%;
  border-radius: 13px;
  height: 50px;
`;

export const DeleteButton = Styled.TouchableOpacity`
  width: 120px;
  height: 40px;
`;

export const EditButton = Styled.TouchableOpacity`
  width: 120px;
  height: 40px;
`;

export const ButtonText = Styled.Text`
  color: white;
  background-color: #3498db;
  height: 40px;
  text-align: center;
  padding: 10px;
  border-radius: 13px;
`;

export const ButtonBox = Styled.View`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
