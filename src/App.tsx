import { observer } from "mobx-react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactView from "./components/ContactView";
import ContactEdit from "./components/ContactView/ContactEdit";
import PhoneView from "./components/ContactView/PhoneView";
import Header from "./components/Header";

import AddIcon from "./assets/add.png";
import AddContact from "./components/AddContact";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <div className="max-w-[1440px] m-auto">
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/contact/:id" element={<ContactView />}>
            <Route path="/contact/:id" element={<PhoneView />} />
            <Route path="/contact/:id/edit" element={<ContactEdit />} />
          </Route>
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </div>
      <FAB />
    </BrowserRouter>
  );
};

const FAB = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/add")}
      className="rounded-full md:hidden p-4 bg-white fixed bottom-10 right-5 shadow-xl z-50 hover:shadow-md"
    >
      <img src={AddIcon} className="w-9 h-9 rounded-full" />
    </button>
  );
};

export default observer(App);
