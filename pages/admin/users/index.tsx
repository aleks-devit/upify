import React from 'react';
import {NextPage} from "next";
import dynamic from "next/dynamic";
import withApollo from "../../../hoc/withApollo";
import withAuth from "../../../hoc/withAuth";
import { useGetAdminUsers, useGetMerchantUsers } from 'apollo/actions';
const CabinetLayout = dynamic(
  () => import('../../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

const Users:NextPage = () => {
  const { data: { getAdminUsers } = {}, loadingAdmins, errorAdmins } = useGetAdminUsers();
  const { data: { getMerchantUsers } = {}, loadingUsers, errorUsers } = useGetMerchantUsers();
  console.log(getAdminUsers, getMerchantUsers)
  return (
    <CabinetLayout>
      Log Hi
    </CabinetLayout>
  );
};

export default withApollo(withAuth(Users, true));