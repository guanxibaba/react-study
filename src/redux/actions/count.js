/*
    用于定义conut中的action对象
 */
import {INCREMENT,DECREMENT} from '../constan'
export const createActionIncrement = data => ({ type: INCREMENT, data })
export const createActiondecrement = data => ({ type: DECREMENT,data})
export const createActionAsyncIncrement = (data,time) => {
    return (disptach) => {
        setTimeout(() => {
            disptach(createActionIncrement(data))
        },time)
    }
}