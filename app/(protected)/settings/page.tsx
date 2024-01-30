import { Metadata } from "next";
import { SettingsForm } from "@/components/settings-form";

export const metadata: Metadata = {
  title: 'Settings',
};

const SettingsPage = () => {
  return (
    <SettingsForm />
  )
};

export default SettingsPage;
