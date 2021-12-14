import { useRef, useState } from "react";
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
import { GweiInput, TaskHeaders } from "./TaskPage.components";

export const TaskPage = () => {
  const gwei = useRef<HTMLInputElement>(null);
  const [isGweiCheckVisible, setGweiCheckVisible] = useState(true);

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
            onClick={() => {}}
          />
          <ActionButton
            buttonText="Create Tasks"
            ButtonIcon={PlusIcon}
            onClick={() => {}}
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
      <TaskHeaders></TaskHeaders>
    </Page>
  );
};
