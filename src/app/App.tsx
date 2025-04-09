import { RouterProvider } from "react-router";
import { router } from "./routing/router";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <ChakraProvider value={defaultSystem}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    );
}

export default App;
