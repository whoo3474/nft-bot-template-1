import { useRef, useState } from "react";
import { useAddTaskModalContext } from "../../modals/AddTaskModal/AddTaskModal";
import { useManageTaskModalContext } from "../../modals/ManageTaskModal/ManageTaskModal";
import {
  ActionBarWithColumnHeaders,
  ActionButton,
  ActionGroup,
  GearIcon2,
  Page,
  PageHeader,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  TrashIcon,
} from "../Pages.components";
import {
  GweiInput,
  TaskList,
  TaskRow,
  TasksColumnHeaders,
  TaskStatus,
} from "./TaskPage.components";

export const TaskPage = () => {
  const gwei = useRef<HTMLInputElement>(null);
  const [isGweiCheckVisible, setGweiCheckVisible] = useState(true);
  const { showAddTaskModal } = useAddTaskModalContext();
  const { showManageTaskModal } = useManageTaskModalContext();

  return (
    <Page>
      <PageHeader>
        <div className="header-title">45 Tasks Created</div>
        <div className="header-info">23 Tasks Running</div>
      </PageHeader>
      <ActionBarWithColumnHeaders>
        <ActionGroup groupTitle="Force Gas ( GWEI )">
          <GweiInput
            ref={gwei}
            onRefreshClick={() => {}}
            isGweiCheckVisible={isGweiCheckVisible}
          />
        </ActionGroup>
        <ActionGroup groupTitle="Actions">
          <ActionButton
            buttonText="Manage Tasks"
            ButtonIcon={GearIcon2}
            onClick={showManageTaskModal}
          />
          <ActionButton
            buttonText="Create Tasks"
            ButtonIcon={PlusIcon}
            onClick={showAddTaskModal}
          />
          <ActionButton
            buttonText="Start All"
            ButtonIcon={PlayIcon}
            onClick={() => {}}
          />
          <ActionButton
            buttonText="Stop All"
            ButtonIcon={PauseIcon}
            onClick={() => {}}
          />
          <ActionButton
            buttonText="Delete All"
            ButtonIcon={TrashIcon}
            onClick={() => {}}
          />
        </ActionGroup>
      </ActionBarWithColumnHeaders>
      <TasksColumnHeaders>
        <div className="contract">Contract</div>
        <div className="network">Network</div>
        <div className="wallet">Wallet</div>
        <div className="status">Status</div>
        <div className="actions">Action</div>
      </TasksColumnHeaders>
      <TaskList>
        <TaskRow
          id="1"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 1"
          status={TaskStatus.Waiting}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="2"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 2"
          status={TaskStatus.Successful}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="3"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 3"
          status={TaskStatus.Waiting}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="4"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 4"
          status={TaskStatus.Waiting}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="5"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 5"
          status={TaskStatus.Waiting}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="6"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 6"
          status={TaskStatus.Successful}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
        <TaskRow
          id="7"
          contract="Showcase (Mainnet)"
          network="Mainnet"
          wallet="Walletname 7"
          status={TaskStatus.Waiting}
          onStartClick={() => {}}
          onDeleteClick={() => {}}
        />
      </TaskList>
    </Page>
  );
};
