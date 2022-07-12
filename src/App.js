// Inbuilt components of react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";

// User define components
import store, { persistor } from "./redux/store";
// import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Api from "./components/Api";
import axios from "axios";
import Login from "./Roshan/Login";
import PortFolio from "./Roshan/PortFolio";
// import Dashboard from "./Roshan/Dashboard";

// For GET requests
axios.interceptors.request.use(
  (req) => {
    // Add configurations here
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (res.status === 201) {
      console.log("Posted Successfully");
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="*" element={<Api />} />
              {/* <Route path="*" element={<Login />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/muskan" element={<PortFolio />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
          </Router>
        </Provider>

        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </PersistGate>
    </QueryClientProvider>
  );
}

export default App;
