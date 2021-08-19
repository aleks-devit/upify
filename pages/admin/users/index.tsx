import React from 'react';
import {NextPage} from "next";
import dynamic from "next/dynamic";
import withApollo from "../../../hoc/withApollo";
import withAuth from "../../../hoc/withAuth";
import { useGetAdminUsers, useGetMerchantUsers } from 'apollo/actions';
import UsersWrapper from "../../../src/Admin/Users";
const CabinetLayout = dynamic(
  () => import('../../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

const Users:NextPage = () => {

  return (
    <CabinetLayout>
      <UsersWrapper/>
    </CabinetLayout>
  );
};

export default withApollo(withAuth(Users, true));