import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "src/pages/home";
import { PostPage } from "src/pages/post";
import { paths } from "src/shared/api/paths";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage />}/>
                <Route path={paths.details} element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

