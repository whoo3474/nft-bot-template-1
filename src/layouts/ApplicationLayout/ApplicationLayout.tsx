import { Route, Routes, useLocation } from "react-router-dom";
import {
  BotIcon,
  GasIcon,
  GasTracker,
  PageContainer,
  SettingsIcon,
  SideNavigation,
  SideNavigationButton,
  SideNavigationButtons,
  SideNavigationHeader,
  SideNavigationTools,
  TasksIcon,
  WalletsIcon,
  WindowButtons,
} from "./ApplicationLayout.components";
import { ApplicationLayoutWrapper } from "./ApplicationLayout.wrapper";

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
            ButtonIcon={TasksIcon}
            buttonText="Tasks"
            currentPathname={pathname}
            to="/"
          />
          <SideNavigationButton
            ButtonIcon={WalletsIcon}
            buttonText="Wallets"
            currentPathname={pathname}
            to="/wallets"
          />
          <SideNavigationButton
            ButtonIcon={SettingsIcon}
            buttonText="Settings"
            currentPathname={pathname}
            to="/settings"
          />
        </SideNavigationButtons>
        <SideNavigationTools>
          <div className="tools-title">
            <div className="title">Tools</div>
            <div className="last-block">
              <span>Last Block: </span>
              <span>7 seconds ago</span>
            </div>
          </div>
          <GasTracker>
            <div className="gas-tracker-header">
              <div className="gas-tracker-title">Gas Tracker</div>
              <GasIcon />
            </div>
            <div className="tracker-values">
              <span>Base Fee:</span>
              <span>727.34 ETH</span>
            </div>
            <div className="tracker-values">
              <span>Rapid Price:</span>
              <span>2341.10 ETH</span>
            </div>
          </GasTracker>
        </SideNavigationTools>
      </SideNavigation>
      <PageContainer>
        <Routes>
          <Route path="/" element={<div>tasks</div>} />
          <Route path="/wallets" element={<div>wallets</div>} />
          <Route path="/settings" element={<div>settings</div>} />
        </Routes>
      </PageContainer>
    </ApplicationLayoutWrapper>
  );
};
