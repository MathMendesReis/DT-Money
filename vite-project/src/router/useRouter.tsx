import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";

export enum RoutersPaths  {
  home = "/"
}
function useRouter() {
    const router = createBrowserRouter([
        {
          path: RoutersPaths.home,
          element: <Main/>,
        },
      ]);
      return [router];
}

export default useRouter
