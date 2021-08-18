import Link from 'next/link';
import React, {FC, useState} from 'react';

const Home:FC = () => {
  //TODO Регулятор авторизации пользователей
  const [auth, setAuth] = useState(true)
  const [admin, setAdmin] = useState(false)

  return (
    <>
      <div className=" bg-secondary ">
        <div className="container d-flex flex-row justify-content-between p-2 align-items-center">
          <h1 className="fs-1">
            Retter Analytics
          </h1>
          {
            auth ? <div className="d-flex flex-row fs-3 ">

                <Link href="/cabinet">
                  <a className="p-2">
                    Cabinet
                  </a>
                </Link>
                {
                  admin && <Link href="/admin"><a className="p-2">Admin</a></Link>
                }

                {/*TODO Сделать logout*/}
                <Link href="/login">
                  <a className="p-2">
                    Logout
                  </a>
                </Link>
              </div>
              : <div className="d-flex flex-row fs-3 ">
                <Link href="/login">
                  <a className="p-2">
                    Login
                  </a>
                </Link>
                <Link href="/register">
                  <a className="p-2">
                    Register
                  </a>
                </Link>
              </div>
          }

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

export default Home;