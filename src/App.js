import React from "react";

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = React.lazy(() => import("./Pages/Shared/Header/Header"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Volunteer = React.lazy(() =>
  import("./Pages/VolunteerMission/Volunteer/Volunteer")
);
const Loader = React.lazy(() => import("./Pages/Loader"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const PolicyPage = React.lazy(() => import("./Pages/PolicyPage/PolicyPage"));
const ShareStory = React.lazy(() =>
  import("./Pages/StoriesListing/ShareStory/ShareStory")
);
const StoryDetail = React.lazy(() =>
  import("./Pages/StoriesListing/StoryDetail/StoryDetail")
);
const StoriesListing = React.lazy(() =>
  import("./Pages/StoriesListing/StoryList/StoriesList")
);
const UserEditProfile = React.lazy(() =>
  import("./Pages/User/UserEditProfile")
);
const Registration = React.lazy(() =>
  import("./Pages/Registration/Registration")
);
const TimeSheet = React.lazy(() => import("./Pages/TimeSheet/TimeSheet"));
const Login = React.lazy(() => import("./Pages/Login/Login"));

function App() {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <>
      {/* <Header />
      <Home /> */}
      {/* <Loader /> */}
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Header />
            </React.Suspense>
          }
        >
          <Route
            path="mission/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <Volunteer />
              </React.Suspense>
            }
          />
          <Route element={<ProtectedRoute isAuth={isAuth} />}>
            {/* <Route path="story" element={<StoriesListing />} /> */}
            <Route
              path="story"
              element={
                <React.Suspense fallback={<>...</>}>
                  <StoriesListing />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="/registration"
            element={
              <React.Suspense fallback={<>...</>}>
                <Registration />
              </React.Suspense>
            }
          />
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            path="sharestory"
            element={
              <React.Suspense fallback={<>...</>}>
                <ShareStory />
              </React.Suspense>
            }
          />
          <Route
            path="storydetail/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <StoryDetail />
              </React.Suspense>
            }
          />
          {/* <Route path="/edit" element={<UserEditProfile />} /> */}
          <Route
            path="/timesheet"
            element={
              <React.Suspense fallback={<>...</>}>
                <TimeSheet />
              </React.Suspense>
            }
          />
          <Route
            element={
              <React.Suspense fallback={<>...</>}>
                <ProtectedRoute isAuth={isAuth} />
              </React.Suspense>
            }
          >
            {/* <Route path="/policy" element={<PolicyPage />} /> */}
            <Route
              path="/policy"
              element={
                <React.Suspense fallback={<>...</>}>
                  <PolicyPage />
                </React.Suspense>
              }
            />
            <Route
              path="/edit"
              element={
                <React.Suspense fallback={<>...</>}>
                  <UserEditProfile />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
