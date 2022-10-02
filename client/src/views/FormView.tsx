import { CardContent, TextField, Button } from "@mui/material"
import { UserInfoInterface } from "../types/interfaces/userInfo.interface"
import { useState } from "react"

export const FormView = () => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    title: "",
    description: ""
  })
  const handleInfoInput = (evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    const { name, value } = evt.target
    const property = UserInfoInterface[name]
    setUserInfo((prev) => ({
      ...prev,
      property: value
    }))
  }
  const handleSubmitForm = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log({
      userInfo
    })
  }

  return(
    <CardContent>
      <form style={{display: "flex", flexDirection: "column"}}>
        <TextField
          variant="filled"
          label="Title"
          name="title"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
        />

        <TextField 
          variant="filled"
          label="Description"
          name="description"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
        />

        <Button variant="contained" onClick={handleSubmitForm}>
          Submit
        </Button>
      </form>
    </CardContent>
  )
}