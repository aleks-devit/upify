import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import dynamic from "next/dynamic";
import withApollo from "../../../hoc/withApollo";
import UsersWrapper from "../../../src/Admin/Users";
import {checkAdmin} from "../../../src/helpers/checkToken";

const CabinetLayout = dynamic(
  () => import('../../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  if (!checkAdmin(req.cookies.token)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

const Users:NextPage = () => {

  return (
    <CabinetLayout>
      <UsersWrapper/>
    </CabinetLayout>
  );
};

export default withApollo(Users);