import "./App.css";
import TouchTypingApp from "./components/TouchTypingApp";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./components/reducer";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="py-3 px-[40px]  bg-gray-900 h-[100vh] text-white w-full">
        <div>
          <TouchTypingApp />
        </div>
      </div>
    </Provider>
  );
}

export default App;
