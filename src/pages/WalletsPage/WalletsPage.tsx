import { useAddWalletModalContext } from "../../modals/AddWalletModal/AddWalletModal";
import { useCreateWalletModalContext } from "../../modals/CreateWalletModal/CreateWalletModal";
import {
  ActionBar,
  ActionButton,
  EditIcon,
  ExportIcon,
  ImportIcon,
  LaptopIcon,
  Page,
  PageHeader,
  PlusIcon,
} from "../Pages.components";
import { Wallet, WalletList, WalletsActionGroup } from "./Wallets.components";

export const WalletsPage = () => {
  const { showAddWalletModal } = useAddWalletModalContext();
  const { showCreateWalletModal } = useCreateWalletModalContext();

  return (
    <Page>
      <PageHeader>
        <div className="header-title">7 Wallets</div>
        <div className="header-info">3 In Use</div>
      </PageHeader>
      <ActionBar>
        <WalletsActionGroup groupTitle="Actions">
          <div className="sub-group">
            <ActionButton
              buttonText="Add Wallet"
              ButtonIcon={PlusIcon}
              onClick={showAddWalletModal}
            />
            <ActionButton
              buttonText="Check All"
              ButtonIcon={LaptopIcon}
              onClick={() => {}}
            />
          </div>
          <div className="sub-group">
            <ActionButton
              buttonText="Create Wallet"
              ButtonIcon={EditIcon}
              onClick={showCreateWalletModal}
            />
            <ActionButton
              buttonText="Export All"
              ButtonIcon={ExportIcon}
              onClick={() => {}}
            />
            <ActionButton
              buttonText="Import"
              ButtonIcon={ImportIcon}
              onClick={() => {}}
            />
          </div>
        </WalletsActionGroup>
      </ActionBar>
      <WalletList>
        <Wallet
          name="Wallet 1"
          balance={0.4}
          address="0xab5801a7d398351b8be11c439e05c5b3259aec9b"
          onStartClick={() => {}}
          onDeleteClick={() => {}}
          onExportClick={() => {}}
          isCheckingBalance={false}
        />
        <Wallet
          name="Wallet 2"
          balance={0.4}
          address="0xab5801a7d398351b8be11c439e05c5b3259aec9b"
          onStartClick={() => {}}
          onDeleteClick={() => {}}
          onExportClick={() => {}}
          isCheckingBalance={false}
        />
        <Wallet
          name="Wallet 3"
          balance={0.4}
          address="0xab5801a7d398351b8be11c439e05c5b3259aec9b"
          onStartClick={() => {}}
          onDeleteClick={() => {}}
          onExportClick={() => {}}
          isCheckingBalance={true}
        />
        <Wallet
          name="Wallet 4"
          balance={0.4}
          address="0xab5801a7d398351b8be11c439e05c5b3259aec9b"
          onStartClick={() => {}}
          onDeleteClick={() => {}}
          onExportClick={() => {}}
          isCheckingBalance={true}
        />
        <Wallet
          name="Wallet 5"
          balance={0.4}
          address="0xab5801a7d398351b8be11c439e05c5b3259aec9b"
          onStartClick={() => {}}
          onDeleteClick={() => {}}
          onExportClick={() => {}}
          isCheckingBalance={false}
        />
      </WalletList>
    </Page>
  );
};
