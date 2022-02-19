import React, { useState } from "react"
import "./index.scss"
import { Switch, Route } from "react-router"
import Step1 from "./pages/Step1"
import Step2 from "./pages/Step2"
import Success from "./pages/Success"

const App = () => {
  const [formFull, setFormFull] = useState({});
  const submitPartialForm = (form: any) => {
    const result = { ...formFull, ...form }
    setFormFull(result)
    return result
  }

  return (
    <>
      {/* {JSON.stringify(formFull)} */}
      <Switch>
        <Route path="/" exact render={() => <Step1 formFull={formFull} submitPartialForm={submitPartialForm} />} />
        <Route path="/step2" render={() => <Step2 formFull={formFull} submitPartialForm={submitPartialForm} setFormFull={setFormFull} />} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  )
}

export default App
