import "react-native-gesture-handler"
import { Provider } from "urql"
import { createClient } from "@urql/core"
import React from "react"
import { Provider as PaperProvider } from "react-native-paper"
import { Navigation } from "./navigation"

const client = createClient({ url: "http://localhost:3000/graphql" })

const App = () => {
  return (
    <Provider value={client}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  )
}

export default App
