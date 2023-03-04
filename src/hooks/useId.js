import { useId } from "react"

const useUniqueId=()=>{
    const id =Number(useId())
    return id
}
export default useUniqueId