import {ApolloServer} from "apollo-server-micro"
// Достаем схему
import {schema} from "schema/schema"
// Create Apollo-server
const server = new ApolloServer({schema})
// Обработчик запросов и ответов (ему передаем адрес где будет жить сервер)
const handler = server.createHandler({path: '/api/graphql'})

export const config = {
  // Отключаем парсер для увеличения скорости работы
  api: {
    bodyParser: false
  }
}

export default handler