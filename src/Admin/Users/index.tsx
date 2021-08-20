import React, {useState} from 'react';
import clsx from "clsx";
import UserTable from "./UserTable";
import { useGetAdminUsers, useGetMerchantUsers } from 'apollo/actions';
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const UsersWrapper = ({data}) => {
  const [tab, setTab] = useState('Header')


  return (
    <div>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Header'})}
                onClick={() => setTab('Header')}
                role='tab'
              >
                Admins
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Toolbar'})}
                onClick={() => setTab('Toolbar')}
                role='tab'
              >
                Merchants
              </a>
            </li>
          </ul>
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'Header'})}>
                <UserTable users={data}/>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
                <UserTable users={data}/>
              </div>

            </div>
          </div>
          {/* end::Body */}

        </form>
        {/* end::Form */}
      </div>
    </div>
  );
};
// TODO законсолить получение пользователей эсли работает то с токенами тоже проблем не будет иначе спрашивай
export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://localhost:3001/graphql/',
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
    query getAdminUser{
      User
    }
    query getMerchantUsers{
      User
    }
    `
  })
  console.log(data)
  return{
    props: {
      data: data
    }
  }

}

export default UsersWrapper;