import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./Components/HomeComponent/index";
import "./Components/HomeComponent/home.css";
import Apply from "./Components/Apply/apply";
import Fasttrack from "./Components/Apply/fasttrack";
import FindAdvisor from "./Components/Apply/findAdvisor";
import Getanobserver from "./Components/Apply/getanobserver";
import Verification from "./Components/Apply/verification";
import Worthiness from "./Components/Apply/worthiness";
import Attempt from "./Components/Apply/attempt";
import Fulfilment from "./Components/Apply/fulfilment";
import Recordtrial from "./Components/Apply/recordtrial";
import Recordroadmap from "./Components/Apply/recordroadmap";
import Policies from "./Components/Apply/policies";
import NFT from "./Components/Apply/nft";
import NFTMarketplace from "./Components/Apply/nftmarketplace";
import AvatarStore from "./Components/Apply/avatarstore";
import RecordMuseum from "./Components/Apply/recordmuseum";
import Business from "./Components/Apply/business";
import Government from "./Components/Apply/government";
import Advocacy from "./Components/Apply/advocacy";
import Educators from "./Components/Apply/educators";
import Ourstory from "./Components/Apply/ourstory";
import Ourculture from "./Components/Apply/ourculture";
import Vision from "./Components/Apply/ourvm";
import Processingtime from "./Components/Apply/processingtime";
import Store from "./Components/Apply/store";
import CheckoutPage from "./Components/Checkout/Checkout";
import SignIn from "./admin/pages/SignIn";
import "antd/dist/reset.css";
import SignUp from "./admin/pages/SignUp";
import "./admin/assets/styles/main.css";
import "./admin/assets/styles/responsive.css";
import Dashboard from "./admin/pages/Home";
import Table from "./admin/pages/Tables";
import Step from "./admin/pages/Steps";
import store from "./slice/index";
import { Provider } from "react-redux";
import DashboardAdmin from "./superuser/pages/Home";
import AdminTables from "./superuser/pages/Tables";
import MessageUsers from "./superuser/pages/MessageUsers";
import MessageList from "./superuser/pages/ListMessages";
import Messages from "./admin/pages/Messaging";
import AvatarForm from "./superuser/pages/AvatarStore";
import UserCheckout from "./Components/Checkout/UserCheckout";
import UserCheckoutPage from "./Components/Checkout/UserCheckoutPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/fasttrack" element={<Fasttrack />} />
          <Route path="/findadvisor" element={<FindAdvisor />} />
          <Route path="/getanobserver" element={<Getanobserver />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/worthiness" element={<Worthiness />} />
          <Route path="/attempt" element={<Attempt />} />
          <Route path="/fulfilment" element={<Fulfilment />}></Route>
          <Route path="/recordtrial" element={<Recordtrial />}></Route>
          <Route path="/recordroadmap" element={<Recordroadmap />}></Route>
          <Route path="/policies" element={<Policies />}></Route>
          <Route path="/nft" element={<NFT />}></Route>
          <Route path="/nftmarket" element={<NFTMarketplace />}></Route>
          <Route path="/avatarstore" element={<AvatarStore />}></Route>
          <Route path="/recordmuseum" element={<RecordMuseum />}></Route>
          <Route path="/businness" element={<Business />}></Route>
          <Route path="/government" element={<Government />}></Route>
          <Route path="/advocacy" element={<Advocacy />}></Route>
          <Route path="/educators" element={<Educators />}></Route>
          <Route path="/ourstory" element={<Ourstory />}></Route>
          <Route path="/ourculture" element={<Ourculture />}></Route>
          <Route path="/ourvm" element={<Vision />}></Route>
          <Route path="/processingtime" element={<Processingtime />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/checkout" element={<UserCheckoutPage />}></Route>
          <Route path="/dashboard/application" element={<Table />}></Route>
          <Route path="/dashboard/checkout" element={<CheckoutPage />}></Route>
          <Route path="/dashboard/apply" element={<Step />}></Route>
          <Route path="/tables" element={<Table />} />
          <Route path="/superuser" element={<DashboardAdmin/>} />
          <Route path="/admintables" element={<AdminTables />} />
          <Route path="/messageusers" element={<MessageUsers />} />
          <Route path="/usermessages" element={<Messages />} />
          <Route path="/adminmessages" element={<MessageList />} />
          <Route path="/avatarform" element={<AvatarForm />} />

        </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
