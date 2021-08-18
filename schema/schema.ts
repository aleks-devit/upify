import {makeSchema, queryType} from "@nexus/schema"



const Query = queryType({
  definition(t) {
    t.string("name", {resolve: () => "Leigh Halliday"})
  }
})

const types = {Query}

// Создаем схему
export const schema = makeSchema({
  types
})