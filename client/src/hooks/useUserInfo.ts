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
    setUserInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitForm = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const { title } = userInfo;

    if (title) {
      fetch("http://localhost:3000/api/v1/tasks", {
				method: "POST",
				body: JSON.stringify(userInfo),
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(task => console.log({
					task
				}))
    } else {
      console.log("Unable to update database")
    }
  }

  return {
    handleInfoInput,
    handleSubmitForm
  }
}