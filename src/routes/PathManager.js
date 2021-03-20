import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contactus from "../components/contacts/Contactus";
import Landingpage from "../components/landingpage/Landingpage";
import LoginPage from "../components/logins/LoginPage";
import LogoutPage from "../components/logins/LogoutPage";
import Managment from "../components/managment/Managment";
import AdmissionForm from "../components/AdmissionForm";
import UpdateList from "../components/UpdateList";
import ErrorPage from "../components/ErrorPage";
import NavLinks from "./NavLinks";

// Imported Components
// import NoticePost from "../components/NoticePost";
import NoticePost from "../components/NoticePost";
import NoticeBoard from "../components/Home/NoticeBoard";
import EditNotice from "../components/EditNotice";

import ListView from "../components/ListView";
// import NoticeBoard from "../components/NoticeBoard";
import Imguploads from "../components/imageuploads/Imguploads";
import requireAuth from "../components/requireAuth";
import deRequireAuth from "../components/deRequireAuth";

function PathManager() {
  return (
    <div>
      {/* <NavLinks /> */}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/notice-post" component={requireAuth(NoticePost)} />
        <Route exact path="/about" component={requireAuth(Managment)} />
        <Route exact path="/loginpage" component={deRequireAuth(LoginPage)} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/admissionForm" component={AdmissionForm} />
        <Route exact path="/listView" component={requireAuth(ListView)} />
        {/* <Route exact path="/notice" component={NoticeBoard} /> */}
        <Route exact path="/notice-auth" component={requireAuth(NoticeBoard)} />
        <Route exact path="/logout" component={requireAuth(LogoutPage)} />
        <Route exact path="/uploadsimg" component={requireAuth(Imguploads)} />

        <Route exact path="/updateList/:id" component={UpdateList} />

        <Route
          exact
          path="/edit-notice/:id"
          component={requireAuth(EditNotice)}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default PathManager;
