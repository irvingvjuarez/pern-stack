import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestHttp } from "../services/requestHttp.service";
import { actions } from "../store";
import { EActionTypes } from "../store/actions.enum";
import { MethodType } from "../types/customTypes/methods.type";
import { TaskInterface } from "../types/interfaces/task.interface";
import { UserInfoInterface } from "../types/interfaces/userInfo.interface"
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";

const initialValue = {
  title: "",
  description: ""
}

export const useUserInfo = (info: UseTaskResponse) => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>(initialValue);
	const [isTitle, setIsTitle] = useState(true)
	const method: MethodType = (info.data as TaskInterface).task_name !== "" ? "PUT" : "POST";
	const navigate = useNavigate()
	const dispatch = useDispatch()

  const handleInfoInput = (evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    const { name, value } = evt.target
    setUserInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitForm = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, method: MethodType, id: number) => {
    evt.preventDefault();
    const { title } = userInfo;

    if (title) {
			await requestHttp({
				method,
				data: userInfo,
				id
			})

			navigate("/")
			dispatch(actions[EActionTypes.setMsg]({
				message: "Task event done correctly",
				status: "success"
			}))

			setTimeout(() => {
				dispatch(actions[EActionTypes.removeMsg]())
			}, 3000)
    } else {
      setIsTitle(false)
    }
  }

  return {
    handleInfoInput,
    handleSubmitForm,
		isTitle,
		method
  }
}