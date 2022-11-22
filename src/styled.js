import styled from "styled-components";

export const Body = styled.div`
  font-family: Arial, serif;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  height: 100vh;
`;

export const Header = styled.h3`
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.1);
`;

export const AllDashboard = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const TodoDashboard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  border: 2px solid #a1c4fd;
  background-color: #e8e8e8;
`;

export const HeaderTodoDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
`;

export const DivUl = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  min-height: 100px;
  overflow: auto;
  max-height: 80vh;
  margin-top: 10px;
`;

export const ItemsTodoUl = styled.ul`
  width: 250px;
  text-align: center;
`;

export const ItemTodo = styled.li`
  list-style-type: none;
  padding: 5px;
  margin-top: 10px;
  min-height: 100px;
  border: 1px solid #f8f8f8;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const NameTodoDashboard = styled.span`
  font-size: 16px;
  margin-left: 20px;
  color: #484848;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const ActionDashboard = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  color: #484848;
`;

export const ActionPlus = styled.div`
  margin-right: 10px;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const ActionMenu = styled.div`
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const AddDashboard = styled.button`
  height: 30px;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  color: #505050;
  border: 2px solid #a1c4fd;
  background: transparent;
  transition-duration: 0.5s;
  &:hover {
    background-color: #f8f8f8;
    border: 2px solid #a1c4fd;
    border-radius: 8px;
    color: black;
  }
`;

export const AddTodoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const AddTodo = styled.button`
  color: #505050;
  height: 30px;
  width: 250px;
  padding: 5px;
  cursor: pointer;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  background: transparent;
  transition-duration: 0.7s;
  &:hover {
    color: black;
  }
`;
