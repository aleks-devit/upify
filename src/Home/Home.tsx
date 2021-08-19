import {useLazyGetUser} from 'apollo/actions';
import Link from 'next/link';
import React, {FC, useEffect, useState} from 'react';
import withApollo from "../../hoc/withApollo";
import withAuth from 'hoc/withAuth';

const Home: FC = () => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, {data, error}] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(null);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }

  return (
    <>
      <div className=" bg-secondary ">
        <div className="container d-flex flex-row justify-content-between p-2 align-items-center">
          <h1 className="fs-1">
            Retter Analytics
          </h1>

          <div className="d-flex flex-row fs-3 ">
            <Link href="/cabinet">
              <a className="p-2">
                Cabinet
              </a>
            </Link>
            <Link href="/logout">
              <a className="p-2">
                Logout
              </a>
            </Link>
          </div>


        </div>

      </div>
      <div className="container">
        <div className="d-flex bg-light flex-row justify-content-center">
          <div className="p-5 mw-500px w-100 text-center ">
            <div className="fs-4x">
              All-in-one web analytics.
            </div>
            <div className="fs-2x">
              Easy and friendly analytics. Track your users journey, replay sessions, collect heatmaps & more.
            </div>
            <Link href="/register">
              <a className="p-3 m-5 btn fs-2 bg-info text-white">
                Get started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(withAuth(Home, ['guest', 'instructor']));