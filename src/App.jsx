import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import {
  Body,
  Header,
  AllDashboard,
  TodoDashboard,
  AddDashboard,
  HeaderTodoDashboard,
  DivUl,
  ItemsTodoUl,
  ItemTodo,
  NameTodoDashboard,
  ActionDashboard,
  ActionPlus,
  ActionMenu,
  AddTodoDiv,
  AddTodo,
} from "./styled";
import { useState } from "react";
import ModalComponent from "./Modal";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const handleNameChange = (name) => {
    setName(name);
  };

  return (
    <>
      <Body>
        <Header>Task Board</Header>
        <AllDashboard>
          <TodoDashboard>
            <HeaderTodoDashboard>
              <NameTodoDashboard>Недавно назначен</NameTodoDashboard>
              <ActionDashboard>
                <ActionPlus>
                  <FontAwesomeIcon icon={faPlus} />
                </ActionPlus>
                <ActionMenu>
                  <FontAwesomeIcon icon={faEllipsis} />
                </ActionMenu>
              </ActionDashboard>
            </HeaderTodoDashboard>
            <DivUl>
              <ItemsTodoUl></ItemsTodoUl>
              <span>{name}</span>
            </DivUl>
            <AddTodoDiv>
              <AddTodo onClick={() => setIsActive(true)}>
                <FontAwesomeIcon icon={faPlus} /> Добавить задачу
              </AddTodo>
            </AddTodoDiv>
          </TodoDashboard>
          <AddDashboard>
            <FontAwesomeIcon icon={faPlus} /> Добавить раздел
          </AddDashboard>
        </AllDashboard>
      </Body>
      {!isActive ? null : (
        <ModalComponent
          active={isActive}
          setActive={setIsActive}
          onChange={handleNameChange}
        />
      )}
    </>
  );
};
export default App;
