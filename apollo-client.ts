import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import {useMemo} from "react"

let apolloClient: ApolloClient<NormalizedCacheObject>

function createIsomorphicLink() {
  // Проверяем где мы находимся
  if(typeof window === "undefined") {
    // Если мы на сервер то достаточно только передать схему
    const {SchemaLink} = require("@apollo/client/link/schema")
    const {schema} = require("./schema/schema")
    return new SchemaLink({schema})
  }else {
    // Если мы в браузере то создаем связь с сервером
    const {HttpLink} = require("@apollo/client/link/http")
    return new HttpLink({uri: "/api/graphql"})
  }
}

function createApolloClient(){
  return new ApolloClient({
    // Проверяем где мы находимся (на серваке или клиенте)
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(),
    cache: new InMemoryCache()
  })
}

// Функция инициализации аполло которая принимает на старте определенное состояние
export function initializeApollo(initialState = null){
const _apolloClient = apolloClient ?? createApolloClient()

  // Если у нас есть что то в состоянии то закидываем его в кеш аполло
  if(initialState){
    _apolloClient.cache.restore(initialState)
  }
  // Если же мы на серваке, то инициализируем аполло-клиента по новой
  if(typeof window === "undefined") return _apolloClient

  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export function useApollo(initialState) {
  // Инициализируем аполло по состоянию (только если оно менялось)
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}