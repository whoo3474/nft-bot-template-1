import { Route, Routes, useLocation } from "react-router-dom";
import { AddTaskModal } from "../../modals/AddTask/AddTaskModal";
import {
  BotIcon,
  GasIcon,
  GearIcon1,
  IconContainer,
  PageContainer,
  SideNavigationButtons,
  WalletIcon,
  WindowsIcon,
} from "../../pages/Pages.components";
import { SettingsPage } from "../../pages/SettingsPage/SettingsPage";
import { TaskPage } from "../../pages/TasksPage/TaskPage";
import { WalletsPage } from "../../pages/WalletsPage/WalletsPage";
import { DarkCharcoal } from "../../styles/Colors";
import {
  GasTracker,
  SideNavigation,
  SideNavigationButton,
  SideNavigationHeader,
  SideNavigationTools,
  WindowButtons,
} from "./ApplicationLayout.components";
import { ApplicationLayoutWrapper } from "./ApplicationLayout.wrappers";

export const ApplicationLayout = () => {
  const { pathname } = useLocation();

  return (
    <ApplicationLayoutWrapper>
      <SideNavigation>
        <WindowButtons closeOnClick={() => {}} minimizeOnClick={() => {}} />
        <SideNavigationHeader>
          <BotIcon />
          <div className="bot-name">BotName</div>
        </SideNavigationHeader>
        <SideNavigationButtons>
          <div className="dashboard-title">Dashboard</div>
          <SideNavigationButton
            ButtonIcon={WindowsIcon}
            buttonText="Tasks"
            currentPathname={pathname}
            to="/"
          />
          <SideNavigationButton
            ButtonIcon={WalletIcon}
            buttonText="Wallets"
            currentPathname={pathname}
            to="/wallets"
          />
          <SideNavigationButton
            ButtonIcon={GearIcon1}
            buttonText="Settings"
            currentPathname={pathname}
            to="/settings"
          />
        </SideNavigationButtons>
        <SideNavigationTools>
          <div className="tools-title">
            <div className="title">Tools</div>
            <div className="last-block">
              <div>Last Block: </div>
              <div>7 seconds ago</div>
            </div>
          </div>
          <GasTracker>
            <div className="gas-tracker-header">
              <div className="gas-tracker-title">Gas Tracker</div>
              <IconContainer size="26px" color={DarkCharcoal}>
                <GasIcon />
              </IconContainer>
            </div>
            <div className="tracker-values">
              <div>Base Fee:</div>
              <div>727.34 ETH</div>
            </div>
            <div className="tracker-values">
              <div>Rapid Price:</div>
              <div>2341.10 ETH</div>
            </div>
          </GasTracker>
        </SideNavigationTools>
      </SideNavigation>
      <PageContainer>
        <Routes>
          <Route
            path="/"
            element={
              <AddTaskModal>
                <TaskPage />
              </AddTaskModal>
            }
          />
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </PageContainer>
    </ApplicationLayoutWrapper>
  );
};
