import { useState } from "react"
import { UserInfoInterface } from "../types/interfaces/userInfo.interface"

const initialValue = {
  title: "",
  description: ""
}

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>(initialValue);

  const handleInfoInput = (evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    const { name, value } = evt.target
    setUserInfo((prev) => {
      // @ts-ignore
      prev[name] = value
      return {
      ...prev
      }
    })
  }
  const handleSubmitForm = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { title } = userInfo;

    if (title) {
      console.log("Ready to update database")
    } else {
      console.log("Unable to update database")
    }
  }

  return {
    handleInfoInput,
    handleSubmitForm
  }
}