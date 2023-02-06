import { Header, PageTemplate, Popup } from "@/components";

export const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Popup >
        <h1>Home Page</h1>
      </Popup>
    </PageTemplate>
  );
};