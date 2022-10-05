import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { requestHttp } from "../services/requestHttp.service";
import { UserInfoInterface } from "../types/interfaces/userInfo.interface"

const initialValue = {
  title: "",
  description: ""
}

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>(initialValue);
	const [isTitle, setIsTitle] = useState(true)
	const navigate = useNavigate()

  const handleInfoInput = (evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    const { name, value } = evt.target
    setUserInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitForm = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const { title } = userInfo;

    if (title) {
			await requestHttp({
				method: "POST",
				data: userInfo
			})

			navigate("/")
    } else {
      setIsTitle(false)
    }
  }

  return {
    handleInfoInput,
    handleSubmitForm,
		isTitle
  }
}