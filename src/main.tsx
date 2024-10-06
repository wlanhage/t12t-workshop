import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MarketingPage from "./MarketingPage";
import MarketingPageBrokenKeyboard from "../workshop-manual-testing/01-keyboard-navigation/MarketingPageBrokenKeyboard";
import MarketingPageBrowser from "../workshop-manual-testing/02-browser-builtin-tools/MarketingPageBrowser";
import MarketingPagePlugins from "../workshop-manual-testing/03-browser-plugins/MarketingPagePlugins";
import MarketingPageIntegration from "../workshop-automated-testing/02-cypress-integration/MarketingPageIntegration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketingPage />,
  },
  {
    path: "/manual/keyboard",
    element: <MarketingPageBrokenKeyboard />,
  },
  {
    path: "/manual/browser",
    element: <MarketingPageBrowser />,
  },
  {
    path: "/manual/plugins",
    element: <MarketingPagePlugins />,
  },
  {
    path: "/automated/integration",
    element: <MarketingPageIntegration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
