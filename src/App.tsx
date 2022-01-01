import { observer } from "mobx-react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactView from "./components/ContactView";
import ContactEdit from "./components/ContactView/ContactEdit";
import PhoneView from "./components/ContactView/PhoneView";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/contact/:id" element={<ContactView />}>
          <Route path="/contact/:id" element={<PhoneView />} />
          <Route path="/contact/:id/edit" element={<ContactEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default observer(App);
