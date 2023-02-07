import { Header, PageTemplate, Popup } from "@/components";

export const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Popup title="Réglage"/>
    </PageTemplate>
  );
};