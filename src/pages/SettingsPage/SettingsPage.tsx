import { useRef } from "react";
import {
  CheckIconWhite,
  FloppyDiskIcon,
  Page,
  PageHeader,
} from "../Pages.components";
import {
  Setting,
  SettingButton,
  SettingInput,
  SettingList,
} from "./SetingsPage.components";

export const SettingsPage = () => {
  const rpcUrl = useRef<HTMLInputElement>(null);
  const discordWebhook = useRef<HTMLInputElement>(null);
  const retryDelay = useRef<HTMLInputElement>(null);

  return (
    <Page>
      <PageHeader>
        <div className="header-title">Settings</div>
      </PageHeader>
      <SettingList>
        <Setting
          title="RPC URL"
          description="URL of ETH RPC of choice (Ex: Infura, Alchemy)"
        >
          <SettingInput
            ref={rpcUrl}
            spellCheck={false}
            placeholder="Enter URL"
          />
          <div className="button-group">
            <SettingButton
              text="Save"
              ButtonIcon={FloppyDiskIcon}
              onClick={() => {}}
            />
            <SettingButton
              text="Test"
              ButtonIcon={CheckIconWhite}
              onClick={() => {}}
            />
          </div>
        </Setting>
        <Setting
          title="Discord Webhook"
          description="Webhook for BotName alerts"
        >
          <SettingInput
            ref={discordWebhook}
            spellCheck={false}
            placeholder="Enter Webhook"
          />
          <div className="button-group">
            <SettingButton
              text="Save"
              ButtonIcon={FloppyDiskIcon}
              onClick={() => {}}
            />
            <SettingButton
              text="Test"
              ButtonIcon={CheckIconWhite}
              onClick={() => {}}
            />
          </div>
        </Setting>
        <Setting
          title="Retry Delay"
          description="How long to wait between tries (in milliseconds)"
        >
          <SettingInput
            ref={retryDelay}
            spellCheck={false}
            placeholder="Enter Delay (ms)"
          />
          <div className="button-group">
            <SettingButton
              text="Save"
              ButtonIcon={FloppyDiskIcon}
              onClick={() => {}}
            />
          </div>
        </Setting>
      </SettingList>
    </Page>
  );
};
